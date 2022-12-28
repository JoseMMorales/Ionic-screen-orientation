import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  existingScreenOrientation: string = '';
  potrailOrientation: string = '';
  landScapeOrientation: string = '';
  isLandscape$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  subscription!: Subscription;

  constructor(
    private screenOrientation: ScreenOrientation,
    private ref: ChangeDetectorRef,
    private layoutService: LayoutService
  ) {
    this.potrailOrientation = this.screenOrientation.ORIENTATIONS.PORTRAIT;
    this.landScapeOrientation = this.screenOrientation.ORIENTATIONS.LANDSCAPE;

    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 100);
  }

  ngOnInit(): void {
    this.existingScreenOrientation = this.screenOrientation.type;
    this.screenOrientationChange();
    this.layoutService.deviceIsInLandscape(
      this.screenOrientation.type,
      this.isLandscape$
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  screenOrientationChange(): void {
    this.subscription = this.screenOrientation.onChange().subscribe(() => {
      this.existingScreenOrientation = this.screenOrientation.type;
      this.layoutService.deviceIsInLandscape(
        this.screenOrientation.type,
        this.isLandscape$
      );
    });
  }

  unlockOrientation(): void {
    this.screenOrientation.unlock();
  }

  setPotrait(): void {
    this.screenOrientation.lock(this.potrailOrientation).then(() => {
      this.existingScreenOrientation = this.potrailOrientation;
    });
  }

  setLandScape(): void {
    this.screenOrientation.lock(this.landScapeOrientation).then(() => {
      this.existingScreenOrientation = this.landScapeOrientation;
    });
  }

  LockOrientation(): void {
    this.screenOrientation.lock(this.potrailOrientation);
  }
}

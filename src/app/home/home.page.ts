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
  subscription: Subscription[] = [];
  isLandscape$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private screenOrientation: ScreenOrientation,
    private changeDetectorRef: ChangeDetectorRef,
    private layoutService: LayoutService
  ) {
    this.potrailOrientation = this.screenOrientation.ORIENTATIONS.PORTRAIT;
    this.landScapeOrientation = this.screenOrientation.ORIENTATIONS.LANDSCAPE;
  }

  ngOnInit(): void {
    this.setLayout();
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub: Subscription) => {
      sub.unsubscribe();
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

  private setLayout() {
    this.existingScreenOrientation = this.screenOrientation.type;
    this.screenOrientationChange();

    this.subscription.push(
      this.layoutService.setBoolLandscapeValue$.subscribe((value: boolean) => {
        this.isLandscape$.next(value);
        this.changeDetectorRef.detectChanges();
      })
    );
  }

  private screenOrientationChange(): void {
    this.subscription.push(
      this.screenOrientation.onChange().subscribe(() => {
        this.existingScreenOrientation = this.screenOrientation.type;
        this.layoutService.deviceIsInLandscape(this.screenOrientation.type);
      })
    );
  }
}

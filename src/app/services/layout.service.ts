import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private boolValue: BehaviorSubject<boolean> = new BehaviorSubject(false);
  setBoolLandscapeValue$ = this.boolValue.asObservable();

  deviceIsInLandscape(type: string) {
    let booleanVar: boolean = this.isLandscapeType(type);
    this.isLandscapeOrientation(booleanVar);
  }

  private isLandscapeOrientation(isTypeLandscape: boolean): void {
    isTypeLandscape ? this.boolValue.next(true) : this.boolValue.next(false);
  }

  private isLandscapeType(deviceType: string): boolean {
    return ['landscape-secondary', 'landscape-primary', 'landscape'].some(
      (type) => type === deviceType
    );
  }
}

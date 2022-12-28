import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  deviceIsInLandscape(type: string, boolean: BehaviorSubject<boolean>) {
    let booleanVar: boolean = this.isLandscapeType(type);
    this.isLandscapeOrientation(booleanVar, boolean);
  }

  isLandscapeOrientation(
    isTypeLandscape: boolean,
    bool: BehaviorSubject<boolean>
  ): void {
    isTypeLandscape ? bool.next(true) : bool.next(false);
  }

  isLandscapeType(deviceType: string): boolean {
    return ['landscape-secondary', 'landscape-primary', 'landscape'].some(
      (type) => type === deviceType
    );
  }
}

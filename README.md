<div align="center">

<img src="https://user-images.githubusercontent.com/43299285/209837138-5485385b-785c-4565-abb8-9f057cd01625.png" width="80" height="80"/><img src="https://icongr.am/devicon/ionic-original.svg" alt="xd" width="80" height="80"/><img src="https://profilinator.rishav.dev/skills-assets/capacitor.svg" alt="xd" height="80" />

## Ionic Screen Orientation Project

</div>

What a better way to see how Cordova plugins work in order to make very cool functionalities in our Ionic projects. This is a clear example of how to use Capacitor when any set/lock is required in the app. Here, it has been used plugins like [cordova-plugin-screen-orientation](https://ionicframework.com/docs/native/screen-orientation), [es6-promise-plugin](https://www.npmjs.com/package/es6-promise-plugin) and [ionic-native/screen-orientation](https://www.npmjs.com/package/@ionic-native/screen-orientation/v/5.36.0) to `lock()`, `unlock()` different screen's orientations (PORTRAIT, LANDSCAPE) and so the button´s layout.

### Techniques applied...

Basically, there are a few approaches used in this project as implementing the [ng-Class](https://angular.io/api/common/NgClass) for an async conditional boolean handled with [BehaviorSubject](https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject) of RxJs.

#### First of all...

When buttons are clicked we will lock the orientation as per image below:

<div align="center">

<img width="392" alt="cordova_bot" src="https://user-images.githubusercontent.com/43299285/209838712-f15b52f2-666b-4c6c-9344-ee71aa081f91.png">

</div>

#### Then...

Following [screenOrientation plugin API](https://github.com/apache/cordova-plugin-screen-orientation) there is an Event handler which is fired when the orientation of the device detects any change, so that means we can use [Observables](https://rxjs.dev/guide/observable) and make changes needed with [subscriptions](https://rxjs.dev/guide/subscription). It has been placed inside the OnInit Hook for keeping on eye if any change suddenly happen in the device.

<div align="center">

<img width="402" alt="cordova_bot" src="https://user-images.githubusercontent.com/43299285/209839454-2767189d-8c3c-4bfe-a15c-2949f650cc21.png">

</div>

#### Then...

The detection of any change in Angular literal template might be slightly tedious, but in this case [ChangeDetectorRef](https://angular.io/api/core/ChangeDetectorRef) has been call in the constructor to despatch the changes following the setTimer miliseconds set up.

<div align="center">

<img width="430" alt="cordova_bot" src="https://user-images.githubusercontent.com/43299285/209840446-17df03d1-833f-40dd-934f-0c5132356ab9.png">

</div>

### Images of the App...

<div align="center">

#### Potrait layout

  <img width="223" alt="cordova_bot" src="https://user-images.githubusercontent.com/43299285/209841628-34b0185c-fe5c-4dde-98e7-0c0b735e2b26.png">

#### Landscape layout

  <img width="415" alt="cordova_bot" src="https://user-images.githubusercontent.com/43299285/209841777-0f7d6a50-3291-4854-a6fd-6ebffe3c85c7.png">
</div>

### Technology in this project...

- <b>@capacitor/android:</b> "4.6.1",
- <b>@ionic/angular:</b> "6.1.9",
- <b>@angular/cli:</b> "15.0.0",
- <b>@capacitor/cli:</b> "4.6.1",
- <b>@ionic-native/screen-orientation:</b> "^5.36.0",
- <b>cordova-plugin-screen-orientation:</b> "3.0.2",
- <b>es6-promise-plugin:</b> "4.2.2",

### Author...

JoseMMorales :slightly_smiling_face:

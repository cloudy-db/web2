# RunNumber

An application for multi-currency, multi-user bookkeeping.

Leveraging the [Cloudy](https://github.com/cloudy-db/js) P2P NoSQL database, this application runs completely decentralised and serverless.

## Implementation

This is a web-based application. Built with [Angular](http://angular.io) (aka Angular 2, not the original [AngularJS](https://angularjs.org/)).

It can be packaged as a mobile application using [Cordova](https://cordova.apache.org). We currently targets [Android](http://android.com) but porting to other platforms (namely, [iOS](https://www.apple.com/ios/)) should be trivial.

## System Requirements

- [Node.js](https://nodejs.org/en/) ^9 (i.e. >= 9.0.0 < 10.0.0)
- [NPM](https://www.npmjs.com/) >= v5.70
- [POSIX](https://en.wikipedia.org/wiki/POSIX)-like Operating System; IPFS does not build on Microsoft Windows

Please also make sure that the dependencies are installed. This can be done by running `npm install` on the root of this repository.

## Development server

To preview the effects of the application, without building it with optimizations etc, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Quickstart: Building

1. `npm install`
2. `npm run build` (The Angular optimizer/UglifyJS minifier may eat up all the available heap memory. Use `node --max_old_space_size=5000` to run if necessary.)
3. Web assests are now stored in `dist/`.

### Building Cordova App

4. `cordova prepare`
5. `cordova requirements`
6. `cordova build android`
7. Installable APK now in `platforms/android/app/build/outputs`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## See also

- The underlying database, [Cloudy](https://github.com/cloudy-db/js)
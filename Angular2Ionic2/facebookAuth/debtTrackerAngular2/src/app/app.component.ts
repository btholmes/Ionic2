import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';

import firebase from 'firebase';

@Component({
  template: ``
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyDwsxF5Wyv4Hiq2O-G5I5pljVUp7QR6v3Y",
      authDomain: "facebookauth-806d2.firebaseapp.com",
      databaseURL: "https://facebookauth-806d2.firebaseio.com",
      storageBucket: "facebookauth-806d2.appspot.com",
      messagingSenderId: "570912137582"
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      // Splashscreen.hide();
    });
  }
}

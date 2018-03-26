import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { GalleryPage } from '../pages/gallery/gallery';
import { SchedulingPage } from '../pages/scheduling/scheduling';
import { ResearchPage } from '../pages/research/research';
import { SettingsPage } from '../pages/settings/settings';
import { VideoPage } from '../pages/video/video';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage},
      { title: 'List', component: ListPage },
      { title: 'Contact', component: ContactPage},
      { title: 'Settings', component: SettingsPage},
      { title: 'Research', component: ResearchPage},
      { title: 'Scheduling', component: SchedulingPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

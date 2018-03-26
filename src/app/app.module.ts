import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { GalleryPage } from '../pages/gallery/gallery';
import { SchedulingPage } from '../pages/scheduling/scheduling';
import { ConfirmationSchedulingPage } from '../pages/confirmation-scheduling/confirmation-scheduling';
import { ResearchPage } from '../pages/research/research';
import { SettingsPage } from '../pages/settings/settings';
import { VideoPage } from '../pages/video/video';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    GalleryPage,
    SchedulingPage,
    ResearchPage,
    SettingsPage,
    VideoPage,
    AboutPage,
    ConfirmationSchedulingPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    GalleryPage,
    SchedulingPage,
    ResearchPage,
    SettingsPage,
    VideoPage,
    AboutPage,
    ConfirmationSchedulingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

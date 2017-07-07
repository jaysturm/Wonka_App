import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// import { HTTP } from '@ionic-native/http';  // use with going to native app
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { WonkaApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { GreenhousePage } from '../pages/greenhouse/greenhouse';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    WonkaApp,
    AboutPage,
    ContactPage,
    HomePage,
    GreenhousePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(WonkaApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    WonkaApp,
    AboutPage,
    ContactPage,
    HomePage,
    GreenhousePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

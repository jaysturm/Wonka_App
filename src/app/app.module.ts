import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// import { HTTP } from '@ionic-native/http';  // use with going to native app
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { WonkaApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { GreenhousePage } from '../pages/greenhouse/greenhouse';
import { PowerStripPage } from '../pages/power-strip/power-strip';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    WonkaApp,
    HomePage,
    GreenhousePage,
    PowerStripPage,
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
    HomePage,
    GreenhousePage,
    PowerStripPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

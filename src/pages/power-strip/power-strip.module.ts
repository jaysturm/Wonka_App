import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PowerStripPage } from './power-strip';

@NgModule({
  declarations: [
    PowerStripPage
  ],
  imports: [
    IonicPageModule.forChild(PowerStripPage),
  ],
  exports: [
    PowerStripPage
  ]
})
export class PowerStripPageModule {}

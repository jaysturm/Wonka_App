import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GreenhousePage } from './greenhouse';

@NgModule({
  declarations: [
    GreenhousePage,
  ],
  imports: [
    IonicPageModule.forChild(GreenhousePage),
  ],
  exports: [
    GreenhousePage
  ]
})
export class GreenhousePageModule {}

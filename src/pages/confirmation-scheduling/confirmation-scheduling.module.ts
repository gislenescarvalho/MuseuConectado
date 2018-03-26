import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmationSchedulingPage } from './confirmation-scheduling';

@NgModule({
  declarations: [
    ConfirmationSchedulingPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmationSchedulingPage),
  ],
})
export class ConfirmationSchedulingPageModule {}

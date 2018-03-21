import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomNavbarPage } from './custom-navbar';

@NgModule({
  declarations: [
    CustomNavbarPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomNavbarPage),
  ],
})
export class CustomNavbarPageModule {}

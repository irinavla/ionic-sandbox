import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomNavbarPage } from '../custom-navbar/custom-navbar';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
}

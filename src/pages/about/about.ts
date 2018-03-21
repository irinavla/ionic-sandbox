import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomNavbarPage } from '../custom-navbar/custom-navbar';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goToContact() {
    this.navCtrl.push(ContactPage);
  }
}

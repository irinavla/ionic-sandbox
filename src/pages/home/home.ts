import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CustomNavbarPage } from '../custom-navbar/custom-navbar';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  goToAbout() {
    this.navCtrl.push(AboutPage);
  }

  homeContactClick() {
    console.log('Contact was clicked from homepage');
  }

}

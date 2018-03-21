import { Component, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';



@IonicPage()
@Component({
  selector: 'page-custom-navbar',
  templateUrl: 'custom-navbar.html',
  inputs: ['title', 'addBack', 'addSearch', 'addPerson'],
  outputs: ['contactClick']
})
export class CustomNavbarPage {

  contactClick:EventEmitter<any> = new EventEmitter();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomNavbarPage');
  }

  goToBack() {
    this.navCtrl.pop();
  }

  contactAction() {
    this.contactClick.emit();
    this.navCtrl.push(ContactPage);
  }
}

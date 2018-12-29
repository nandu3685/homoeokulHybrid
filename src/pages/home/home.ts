import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser'; /* 1 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	url: "https://homoeokul.com/learn/";

  constructor(public navCtrl: NavController,private iab: InAppBrowser /* 2 */) {

  }
  ngOnInit(){
    const browser = this.iab.create('https://homoeokul.com/learn/','_self', { toolbar: 'no', location: 'no', zoom: 'no' }); /*3*/
}

}

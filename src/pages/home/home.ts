import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

/******************* Pages *******************************/

import { CreatePage } from '../create/create';

/********************************************************/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      console.log("Home controller");
    //  let tmp = new Header(this.navCtrl);
  }

  public clickAdd()
  {
      this.navCtrl.push(CreatePage);
  }

}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


/******************* Pages *******************************/


/********************************************************/

@Component({
  selector: 'page-home',
  templateUrl: 'create.html'
})
export class CreatePage {
  private headerTitle : string = "SimpleCourseLite";

  constructor(public navCtrl: NavController) {
      console.log("Create controller");
  }

  public getHeaderTitle() : string
  {
     return this.headerTitle;
  }


}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { FORMAT, SclDate } from '../../SimpleCourseListe/SclDate'
/******************* Pages *******************************/


/********************************************************/

@Component({
  selector: 'page-home',
  templateUrl: 'create.html'
})
export class CreatePage {
  public title : string = "";

  private prompt = this.alertCtrl.create({
      title: 'Nom de vôtre liste',
      message: "Entrez le nom de vôtre  liste :)",
      inputs: [
        {
          name: 'title',
          placeholder: '',
          value : this.title
        },
      ],
      buttons: [
        {
          text: 'Annuler',

        },
        {
          text: 'Enregistrer',
          handler: this.setTitleFromAlert

        }
      ]
    });

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
      console.log("Create controller");
      let current_date = new SclDate();
      this.title = "Ma liste du " + current_date.format(FORMAT.DD_MM_YYYY);
      this.prompt.present();

  }

  public getTitle() : string
  {
     return this.title;
  }

  public setTitleFromAlert(data: any ) : void
  {
      if(data)
      {
         this.title = data.title ;
      }

  }

}

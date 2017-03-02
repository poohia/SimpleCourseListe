import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/******************* Pages *******************************/


/********************************************************/

@Component({
  selector: 'page-home',
  templateUrl: 'create.html'
})
export class CreatePage {
  private title : string = "";

  private prompt = this.alertCtrl.create({
      title: 'Nom de vôtre liste',
      message: "Entrez le nom de vôtre  liste :)",
      inputs: [
        {
          name: '',
          placeholder: '',
          value : this.title
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enregistrer',
          handler: data => {
            console.log('Saved clicked', data);
          }
        }
      ]
    });

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
      console.log("Create controller");
      this.title = "Ma liste du 01/01/2016" ;
      this.prompt.present();
  }

  public getTitle() : string
  {
     return this.title;
  }


}

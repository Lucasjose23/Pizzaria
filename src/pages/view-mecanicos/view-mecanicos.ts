import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the ViewMecanicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-mecanicos',
  templateUrl: 'view-mecanicos.html',
})
export class ViewMecanicosPage {

  mecanica: any;
  mecanicos: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb:AngularFireDatabase) {
    this.mecanica = navParams.get('mecanica');
    this.mecanicos=this.fb.list('mecanicosmecanica/'+ this.mecanica.key).valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMecanicosPage');
  }

}

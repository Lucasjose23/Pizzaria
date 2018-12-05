import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzasProvider } from '../../providers/pizzas/pizzas';
import { AdicionaisPage } from '../adicionais/adicionais';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the PizzasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizzas',
  templateUrl: 'pizzas.html',
})
export class PizzasPage {
  pizzasT;
  pizzasE;
  pizzasD;
  adicionais;
  email;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pizPro:PizzasProvider,private afAuth: AngularFireAuth) {
    this.pizzasT=pizPro.getPizzasT();
    this.pizzasE=pizPro.getPizzasE();
    this.pizzasD=pizPro.getPizzasD();
    this.adicionais=pizPro.getAdd();

  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.email=data.email;
   
    }});

  }

  verDetalhes(pizzaSelecioda){
    this.navCtrl.push(AdicionaisPage, {pizza: pizzaSelecioda,email: this.email});
  }

  

}

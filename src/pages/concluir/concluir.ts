import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { HomePage } from '../home/home';
import { PizzasPage } from '../pizzas/pizzas';

/**
 * Generated class for the ConcluirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-concluir',
  templateUrl: 'concluir.html',
})
export class ConcluirPage {
  preco;
  nome;
  endereco;
  email;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,public alertCtrl: AlertController) {
    this.preco=navParams.get('valor');
    this.email=navParams.get('email')
    
  }

  ionViewDidLoad() {
    console.log(this.preco);
  }
  alerta(){
    const alert = this.alertCtrl.create({
      title: 'Sucesso !!',
      subTitle: this.nome+' sua pizza sera entrege no endereço: '+this.endereco,
      buttons: ['OK']
    });
    alert.present();
      this.salvar()
      this.navCtrl.push(PizzasPage);

  }
  
  salvar() {

    let compra = { email: '', valortotal: 0, endereco:'' }
    compra.valortotal = this.preco;
    compra.email = this.email;
    compra.endereco=this.endereco;



    this.db.list('compras').push(compra);



  }

}

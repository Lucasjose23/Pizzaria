import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { PizzasPage } from '../pizzas/pizzas';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario={nome:'',cpf:'',email:'',telefone:'',password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public dbUsuario: UsuarioProvider,public alertCtrl: AlertController,public fb:AngularFireAuth) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  async salvar(){
    
    try {
      const result= await this.fb.auth.createUserWithEmailAndPassword(this.usuario.email,this.usuario.password);
      this.dbUsuario.salvar(this.usuario);
      this.navCtrl.setRoot(PizzasPage);
      this.showAlert(1);
      console.log(result);
     
    } catch (e) {
      this.showAlert(2);
      console.log(e)
      
    }
    
    
  }

  showAlert(p) {
      if(p==1){
          const alert = this.alertCtrl.create({
            title: 'Ola!!',
            subTitle: 'Cadastro realizado com sucesso!',
            buttons: ['OK']
          });
          alert.present();
      }
      else{
        const alert = this.alertCtrl.create({
          title: 'Ola!!',
          subTitle: 'Cadastro com erro!!, email invalido ou senha com menos de 4 digitos.',
          buttons: ['OK']
        });
        alert.present();

      }
  }

}

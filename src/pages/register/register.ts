import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { DbMecanicoProvider } from '../../providers/db-mecanico/db-mecanico';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user={email:'',password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public fbAuth:AngularFireAuth) {
  }

  register(user){
    let result=this.fbAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
    console.log(result);
    this.navCtrl.push(LoginPage);
  }

  

}

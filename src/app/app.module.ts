import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SobrePage } from '../pages/sobre/sobre';
import { TabsPage } from '../pages/tabs/tabs';

import { PizzasProvider } from '../providers/pizzas/pizzas';
import { PizzasPage } from '../pages/pizzas/pizzas';
import { AdicionaisPage } from '../pages/adicionais/adicionais';
import { ConcluirPage } from '../pages/concluir/concluir';

import { UsuarioProvider } from '../providers/usuario/usuario';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';


export const firebaseConfig = {
  
  apiKey: "AIzaSyCnyrnTFXHM2hWs_wpcUWUgtWYuGPmrt6s",
  authDomain: "pizzaweb-189f5.firebaseapp.com",
  databaseURL: "https://pizzaweb-189f5.firebaseio.com",
  projectId: "pizzaweb-189f5",
  storageBucket: "",
  messagingSenderId: "436838312526"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobrePage,
    PizzasPage,
    AdicionaisPage,
    ConcluirPage,
    LoginPage,
    CadastroPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobrePage,
    PizzasPage,
    AdicionaisPage,
    ConcluirPage,
    LoginPage,
    CadastroPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzasProvider,
   
    UsuarioProvider
  ]
})
export class AppModule {}

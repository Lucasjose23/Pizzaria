import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

/*
  Generated class for the DbMecanicaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbMecanicaProvider {


  constructor(public db:AngularFireDatabase) {
    
  


    
  }
  
  getMecanicas(){
    return this.db.list('mecanicas').snapshotChanges();
  }

  salvar(mecanica){
    this.db.list('mecanicas').push(mecanica);
    
  }
  editar(mecanica){
    this.db.object('mecanicas/' + mecanica.key).update(
      {
        nome:mecanica.nome,
        marca:mecanica.marca,
        contato:mecanica.contato

      }
    );
  }
  excluir(mecanica){
    this.db.object('mecanicas/' + mecanica.key).remove();
    
  }


}

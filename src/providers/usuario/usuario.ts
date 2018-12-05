import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(public db:AngularFireDatabase) {
    
  }
  getUsuario(){
    return this.db.list('usuarios').snapshotChanges();
  }

  salvar(usuario){
    this.db.list('usuarios').push(usuario);
    
  }
  editar(usuario){
    this.db.object('usuarios/' + usuario.key).update(
      {
        

      }
    );

}
}

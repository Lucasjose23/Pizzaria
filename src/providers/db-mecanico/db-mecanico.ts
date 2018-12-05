import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

/*
  Generated class for the DbMecanicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbMecanicoProvider {

  constructor(public db:AngularFireDatabase) {
    
  }
  getMecanicos(){
    return this.db.list('mecanicos').snapshotChanges();
  }

  salvar(mecanico){
    this.db.list('mecanicos').push(mecanico);
    
  }
  editar(mecanico){
    this.db.object('mecanicos/' + mecanico.key).update(
      {
        nome:mecanico.nome,
        contato:mecanico.contato

      }
    );
  }
  excluir(mecanico){
    this.db.object('mecanicos/' + mecanico.key).remove();
    
  }


}

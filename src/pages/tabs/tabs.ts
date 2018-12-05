import { Component } from '@angular/core';
import { SobrePage } from '../sobre/sobre';
import { PizzasPage } from '../pizzas/pizzas';
import { LoginPage } from '../login/login';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = PizzasPage;
  tab2 = SobrePage;
  tab3= LoginPage;
  tab4=CadastroPage;

}

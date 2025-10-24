import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canada'
}

const client2 = {
  name: 'Melisa',
  gender: 'female',
  age: 33,
  address: 'Toronto, Canada'
}

@Component({
  selector: 'app-uncommont-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommont-page.component.html',
})
export default class UncommontPageComponent {

  // i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeClient() {

    if(this.client() === client1){
      this.client.set(client2);
      return;
    }

    this.client.set(client1);

  }

}

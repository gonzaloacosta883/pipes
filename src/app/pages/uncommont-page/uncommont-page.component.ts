import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe, UpperCasePipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe],
  templateUrl: './uncommont-page.component.html',
})
export default class UncommontPageComponent {

  // i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  // i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningún',
    '=1': 'tenemos una',
    '=2': 'tenemos dos',
    other: 'tenemos #',
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
    'Andrea',
    'Juan',
    'Carlos'
  ]);

  changeClient() {

    if(this.client() === client1){
      this.client.set(client2);
      return;
    }

    this.client.set(client1);

  }

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

}

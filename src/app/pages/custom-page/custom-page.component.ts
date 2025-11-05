import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  nombre = signal('Gonzalo Acosta');
  upperCase = signal(true);

  toggleNombre() {
    this.upperCase.update(value => !value);
  }

}

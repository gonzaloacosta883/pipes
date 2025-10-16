import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe, DatePipe],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {

  totalSells = signal(2_433_232.5567);
  percent = signal(0.4856);
  
  customDate = signal(new Date());

  // Actualizar cada 1 segundo la fecha.
  tickingDateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
      console.log("tick");
    }, 1000);

    onCleanUp(() => {
      clearInterval(interval);
    });

  });

}

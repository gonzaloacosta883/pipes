import { Component, signal } from '@angular/core';
import { heroes } from '../../data/heroes.data';

import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { LowerCasePipe } from '@angular/common';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe, 
    CanFlyPipe, 
    HeroColorPipe, 
    HeroTextColorPipe, 
    HeroCreatorPipe,
    HeroSortByPipe,
    LowerCasePipe,
    HeroFilterPipe
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  nombre = signal('Gonzalo Acosta');
  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal< keyof(Hero) | null >(null);

  searchQuery = signal('');

  toggleNombre() {
    this.upperCase.update(value => !value);
  }

}

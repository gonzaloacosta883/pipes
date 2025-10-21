import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es' | 'en';

@Injectable({providedIn: 'root'})
export class LocaleService {

    currentLocale = signal<AvailableLocale>('es');

    constructor() {
        this.currentLocale.set(
            (localStorage.getItem('locale') as AvailableLocale) ?? 'es'
        );
    }
    
    getLocale(): AvailableLocale {
        return this.currentLocale();
    }

    changeLocale( locale: AvailableLocale ) {
        localStorage.setItem('locale', locale);
        this.currentLocale.set(locale);
        window.location.reload();
    }
    
}
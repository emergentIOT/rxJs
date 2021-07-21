import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './interface/Hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  /**
   * The below method is not asynchronours, didnt return any observale
   * Not a good practice in real life application.
   */
  // getHeroes() : Hero[] {
  //   return HEROES;
  // }
}

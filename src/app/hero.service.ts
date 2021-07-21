import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './interface/Hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor( private messageService: MessageService) { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched Heroes');
    return heroes;
  }

  getHero(id: number) : Observable<Hero> {
    const hero =  HEROES.find(h => h.id === id)!;
    this.messageService.add(`Hero service: fetched id ${id}`);
    return of(hero);
  }

  /**
   * The below method is not asynchronours, didnt return any observale
   * Not a good practice in real life application.
   */
  // getHeroes() : Hero[] {
  //   return HEROES;
  // }
}

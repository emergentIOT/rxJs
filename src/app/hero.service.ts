import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './interface/Hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private herosUrl = 'api/heroes';

  constructor( private messageService: MessageService,
    private http: HttpClient) { }

  getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(this.herosUrl);
  }

  getHero(id: number) : Observable<Hero> {
    const hero =  HEROES.find(h => h.id === id)!;
    this.messageService.add(`Hero service: fetched id ${id}`);
    return of(hero);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * The below method is not asynchronours, didnt return any observale
   * Not a good practice in real life application.
   */
  // getHeroes() : Hero[] {
  //   return HEROES;
  // }
}

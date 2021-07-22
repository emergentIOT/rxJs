import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './interface/Hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private herosUrl = 'api/heroes';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private messageService: MessageService,
    private http: HttpClient) { }
  
    /**
     * Get list of heroes from server
     * 
     */
  getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(this.herosUrl).pipe(
      tap( _ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  /**
   * 
   * Get a Hero based on id 
   * 
   */
  getHero(id: number) : Observable<Hero> {
    const url = `${this.herosUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap( _ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`get hero id=${id}`))
    );
  }

  /**
   * Update Hero object
   * @param hero - Object
   * 
   */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.herosUrl, hero, this.httpOptions).pipe(
      tap( _ => this.log(`Hero update with id : ${hero.id}`)),
      catchError(this.handleError<any>('UpdateHero'))
    );
  }

  /**
   * Add new hero to server
   * Method: POST
   */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.herosUrl, hero, this.httpOptions)
    .pipe(
      tap( _ => this.log(`added new Hero with id= ${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /**
   * Delete a Hero
   * 
   */
  deleteHero(id: number) : Observable<Hero> {
    const url = `${this.herosUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap( _ => this.log(`deleted hero ${id}`)),
      catchError(this.handleError<Hero>('hero deleted'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /**
   * The below method is not asynchronours, didnt return any observale
   * Not a good practice in real life application.
   */
  // getHeroes() : Hero[] {
  //   return HEROES;
  // }
}

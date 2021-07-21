import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interface/Hero';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-tour-heroes-detail',
  templateUrl: './tour-heroes-detail.component.html',
  styleUrls: ['./tour-heroes-detail.component.css']
})
export class TourHeroesDetailComponent implements OnInit {

  @Input() hero? : Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes() : void {
     this.heroService.getHeroes().subscribe(heroes=>{
     this.heroes = heroes
   })
  }

  /*
    Below method is called without observable, 
    In a synchronous way , not a good practice in Angular
  */
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
}

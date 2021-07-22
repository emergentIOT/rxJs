import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../interface/Hero'
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

//This specify angular meta data.
@Component({
  selector: 'app-tour-heroes',
  templateUrl: './tour-heroes.component.html',
  styleUrls: ['./tour-heroes.component.css']
})
export class TourHeroesComponent implements OnInit {

  birthday = new Date(1988, 3, 15);
  title = 'Tour of heroes';
 
  hero: Hero = {
    id: 1,
    name: 'wisdom',
  }

  //export the dummy data.
  heroes : Hero[] = [];

  //Property to be user with click method
  selectedHero? : Hero;
 
  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  //This is called shortly after creating the component
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelectHero(hero: Hero) : void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesCOmponent: Selected hero with id=${hero.id}`)
    console.log('message service', this.messageService);
  }

  getHeroes() : void {
    this.heroService.getHeroes().subscribe(heroes=> {
      console.log("console", heroes);
      this.heroes = heroes;
    })
  }
 
}

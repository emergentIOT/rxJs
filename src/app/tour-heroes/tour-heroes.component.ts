import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/Hero'
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
  heroes = HEROES;

   //Property to be user with click method
  selectedHero? : Hero;
 
  constructor() { }

  //This is called shortly after creating the component
  ngOnInit(): void {
  }

  onSelectHero(hero: Hero) : void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
 
}

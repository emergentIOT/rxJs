import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interface/Hero';
import { HeroService } from '../hero.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-tour-heroes-detail',
  templateUrl: './tour-heroes-detail.component.html',
  styleUrls: ['./tour-heroes-detail.component.css']
})
export class TourHeroesDetailComponent implements OnInit {

  @Input() hero? : Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes() : void {
    //Get the id from URL, using activatedRoute
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
     this.heroService.getHero(id).subscribe(hero=>{
     console.log(`Server responded : ${hero.name}`)
     this.hero = hero
   })
  }

  goBack() : void {
    this.location.back();
  }

  save() : void {
    if(this.hero) {
      this.heroService.updateHero(this.hero).subscribe( () => {
        this.goBack();
      })
    }
  }

  /*
    Below method is called without observable, 
    In a synchronous way , not a good practice in Angular
  */
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
}

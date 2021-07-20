import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/Hero'
//This specify angular meta data.
@Component({
  selector: 'app-tour-heroes',
  templateUrl: './tour-heroes.component.html',
  styleUrls: ['./tour-heroes.component.css']
})
export class TourHeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'wisdom',
   
  }
  birthday = new Date(1988, 3, 15)
  title = 'Tour of heroes'
  constructor() { }

  //This is called shortly after creating the component
  ngOnInit(): void {
  }

}
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interface/Hero';
 
@Component({
  selector: 'app-tour-heroes-detail',
  templateUrl: './tour-heroes-detail.component.html',
  styleUrls: ['./tour-heroes-detail.component.css']
})
export class TourHeroesDetailComponent implements OnInit {

  @Input() hero? : Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({  //decorator function that specifies the Angular metadata for the component.
  selector: 'app-heroes',//the component's CSS element selector
  templateUrl: './heroes.component.html',//the location of the component's template file.
  styleUrls: ['./heroes.component.css']//the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {
  // 
  heroes = HEROES;


  constructor() { }

  ngOnInit() {
  }

}

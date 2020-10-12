import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // styles: ['h1 { font-weight: normal; }'] --> this is inline
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Expose the HEROES array for binding
  heroes = HEROES;
  // Properties, hero is type Hero interface
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
/*    {
    id: 1,
    name: 'Windstorm'
  };*/
  constructor() { }

  ngOnInit() {
  }

}

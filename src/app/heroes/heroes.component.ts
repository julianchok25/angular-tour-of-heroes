import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // styles: ['h1 { font-weight: normal; }'] --> this is inline
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // Properties, hero is type Hero interface
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
/*    {
    id: 1,
    name: 'Windstorm'
  };*/
  // Injecting the HeroService
  constructor(private heroService: HeroService) { }
  //  Method to retrieve the heroes from the service.
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  // lifecycle hook
  ngOnInit() {
    this.getHeroes();
  }

}

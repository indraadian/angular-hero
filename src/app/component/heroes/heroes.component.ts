import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/model/hero';
import { HEROES } from 'src/app/model/dummy/mock-heroes';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }
  
  hero: Hero = {
    id: 1,
    name: 'Windstrom'
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
}

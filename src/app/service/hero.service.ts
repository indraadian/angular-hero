import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

import { HEROES } from 'src/app/model/dummy/mock-heroes';
import { Hero } from '../model/hero';
import { MessageService } from 'src/app/service/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fatched heroes');
    return of(HEROES);
  }

  getHero(id: Number): Observable<Hero> {
    this.messageService.add('HeroService: Fatched hero id=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }
}

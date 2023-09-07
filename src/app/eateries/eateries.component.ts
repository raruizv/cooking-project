import { Component, OnInit, Input } from '@angular/core';

import { Eatery } from '../eatery';
import { EATERIES } from '../mock-entidades';
import { EateryService } from '../eatery.service';

@Component({
  selector: 'app-eateries',
  templateUrl: './eateries.component.html',
  styleUrls: ['./eateries.component.css']
})
export class EateriesComponent implements OnInit {  

  eateries = EATERIES;
  constructor (private eateryService: EateryService) { }

  ngOnInit() { 
    this.getEateries();
  }  

  getEateries(): void {
    this.eateryService.getEateries()
      .subscribe(eateries => this.eateries = eateries);
  }  

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.eateryService.addEatery({ name } as Eatery)
      .subscribe(eatery => {
        this.eateries.push(eatery);
      });
  }

  delete(eatery: Eatery): void {
    this.eateries = this.eateries.filter(e => e !== eatery);
    this.eateryService.deleteEatery(eatery).subscribe();
  }

}

import { Component, OnInit} from '@angular/core';

import { CarPart } from './car-parts.model';
import { RacingDataService } from './racing-data.service';

@Component({
  selector: 'app-car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {
  carParts: CarPart[];

  constructor(private racingDataService: RacingDataService) {};

  ngOnInit() {
    this.racingDataService.getCarParts()
      .subscribe(carParts => this.carParts = carParts);
  };

  totalCost() {
    return Array.isArray(this.carParts) ? this.carParts.reduce((s, c) =>  s + c.entryFee, 0) : 0;
  };

  upQuatity(carPart) {
    if (carPart.quantity < carPart.inStock) {
      carPart.quantity++;
    }
  };

  downQuatity(carPart) {
    if (carPart.quantity > 0) {
      carPart.quantity--;
    }
  };
}

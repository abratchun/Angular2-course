import { CarPart } from './car-parts.model';
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RacingDataService {
  constructor(private http: Http) {};

  getCarParts() {
    return this.http.get('app/components/car-parts/mock.json')
      .map(res => <CarPart[]> res.json().data);

  }


}

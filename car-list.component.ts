import { Component } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './app.car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './app.component.html',
})
export class CarListComponent {
  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) {
    this.cars = carService.getCars();
  }

  showCarDetails(carId: string) {
    this.router.navigate(['/car', carId]); // Use ['/car', carId] instead of ['/cars', carId]
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './car.service';
import { Car } from './app.car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const carId = params['id'];
      this.car = this.carService.getCarById(carId);

      if (!this.car) {
        console.error('Voiture non trouvée.');
      }
    });
  }
}


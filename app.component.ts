import { Component } from '@angular/core';
import { Car } from './app.car';
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
 
  title = 'Mon application Angular';
  cars: Car[]= []; ;

  
  someMethod() {
    
  }
}

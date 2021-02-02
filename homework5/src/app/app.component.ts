import {Component} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {cars} from './db/CarData';
import {CarFace} from './interfaces/carFace';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  model = new FormControl('', [
    Validators.required,
    Validators.minLength(1)
  ]);
  year = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{4}')
  ]);
  color = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  carForm = new FormGroup({
      model: this.model,
      year: this.year,
      color: this.color,
    }
  );
  cars = cars;
  car: CarFace;

  action(): void {
    this.car = this.carForm.value;
    cars.push(this.car);
  }
}

import {Component, OnInit} from '@angular/core';
import {cars} from '../db/CarData';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor() {
  }

  cars = cars;

  ngOnInit(): void {
  }
}

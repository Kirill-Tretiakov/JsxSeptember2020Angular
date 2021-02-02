import {Component, Input, OnInit} from '@angular/core';
import {CarFace} from '../interfaces/CarFace';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: CarFace;

  constructor() {
  }

  ngOnInit(): void {
  }
}

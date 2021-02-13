import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  someValue: number;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCounter().subscribe(value => this.someValue = value);
  }
  increment(): void{
    this.dataService.changeCounter();
  }

}

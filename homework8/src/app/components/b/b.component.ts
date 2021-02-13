import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  someValue: number;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCounter().subscribe(value => this.someValue = value);
  }
  increment(): void{
    this.dataService.changeCounter();
  }
}

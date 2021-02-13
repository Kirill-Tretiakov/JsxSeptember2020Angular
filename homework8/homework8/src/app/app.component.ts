import {AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DataService} from './services';
import {AComponent} from './components/a/a.component';
import {BComponent} from './components/b/b.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnChanges, OnInit, DoCheck, OnDestroy, AfterViewInit {
  @ViewChild(AComponent)
  a: AComponent;
  @ViewChild(BComponent)
  b: BComponent;
  @ViewChild('xxx')
  xxx: ElementRef;

  constructor(public dataService: DataService) {
  }

  increment(): void {
    this.dataService.changeCounter();
  }

  ngOnInit(): void {
    console.log('init');
  }

  ngDoCheck(): void {
    console.log('docheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  ngAfterViewInit(): void {
    console.log(this.a);
    console.log(this.b);
    this.xxx.nativeElement.innerText = 'tririririririririri';
    console.log(this.xxx.nativeElement.innerText);
  }
}

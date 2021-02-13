import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AComponent} from './components/a/a.component';
import {BComponent} from './components/b/b.component';


@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'a', component: AComponent},
      {
        path: 'b', component: BComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

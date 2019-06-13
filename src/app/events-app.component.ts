import { Component } from '@angular/core';
import {EventListComponent} from '../app/events/events-list.componenet'

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>`
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}

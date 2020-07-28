import { Component } from '@angular/core';
import { EventService } from './services/event.service';
import { EventResponse } from './models/event-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  constructor(private eventService: EventService) {
    navigator.geolocation.getCurrentPosition(
      this.onSuccess.bind(this),
      this.onError.bind(this),
      this.options
    );
  }

  onError(error: Error) {
    console.log(error.message);
  }

  onSuccess(position: Position) {
    const parameters = {
      latlong: `${position.coords.latitude},${position.coords.longitude}`
    };
    this.eventService.callEventApi(parameters).subscribe(
      this.onEventCallSuccess.bind(this),
      this.onEventCallError.bind(this)
    );
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  }

  onEventCallSuccess(response: EventResponse) {
    console.log(response);
    this.eventService.events = response._embedded.events;
  }

  onEventCallError(error: Error) {
    console.log(error.message);
  }
}

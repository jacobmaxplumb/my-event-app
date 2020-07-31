import { Component } from '@angular/core';
import { EventService } from './services/event.service';
import { EventResponse } from './models/event-response';
import { EventRequestWithoutApiKey } from './models/event-request-without-api-key';

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

  /**
   * @param  {Error} error
   * when there is an error getting the geolocation
   */
  onError(error: Error) {
    console.log(error.message);
  }

  /**
   * @param  {Position} position
   * When the users postition is gotten this
   * goes ahead and calls a get events method
   */
  onSuccess(position: Position) {
    const parameters: EventRequestWithoutApiKey = {
      latlong: `${position.coords.latitude},${position.coords.longitude}`,
      city: '',
      keyword: ''
    };
    this.eventService.setParameters(parameters);
    this.eventService.callToApiAndSaveResults();
  }
}

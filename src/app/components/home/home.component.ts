import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { EventResponse } from 'src/app/models/event-response';
import { EventObject } from 'src/app/models/event-object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.callEventApi({}).subscribe(
      this.onGetEventsSuccess.bind(this),
      this.onGetEventsError.bind(this)
    );
  }

  onGetEventsSuccess(response: EventResponse) {
    this.eventService.setEvents(response._embedded.events);
  }

  onGetEventsError(error: Error) {
    console.log(error.message);
  }

  getEvents(): EventObject[] {
    return this.eventService.getEvents();
  }

}

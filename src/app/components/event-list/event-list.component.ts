import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { EventObject } from 'src/app/models/event-object';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  getEvents(): EventObject[] {
    return this.eventService.getEvents();
  }

  returnBackgroundImageUrl(image) {
    return `url(${image})`;
  }

}

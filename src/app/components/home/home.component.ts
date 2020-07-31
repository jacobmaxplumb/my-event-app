import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { EventObject } from 'src/app/models/event-object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {}

  getEvents(): EventObject[] {
    return this.eventService.getEvents();
  }

}

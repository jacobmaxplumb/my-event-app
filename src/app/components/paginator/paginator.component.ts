import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { EventResponse } from 'src/app/models/event-response';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor(private eventsService: EventService) { }

  ngOnInit() {
  }

  pageChange(event) {
    this.eventsService.setPageSize(event.pageSize);
    this.eventsService.setPageNumber(event.pageIndex + 1);
    this.eventsService.callEventApi().subscribe((response: EventResponse) => {
      this.eventsService.setEvents(response);
    })
  }

  getTotalElement(): number {
    return this.eventsService.getTotalElements();
  }

  getInitPageSize(): number {
    return this.eventsService.getPageSize();
  }

}

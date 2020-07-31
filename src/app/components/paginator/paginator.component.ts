import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { MatPaginator } from '@angular/material';

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
    this.eventsService.callToApiAndSaveResults();
  }

  getTotalElement(): number {
    return this.eventsService.getTotalElements();
  }

  getInitPageSize(): number {
    return this.eventsService.getPageSize();
  }

}

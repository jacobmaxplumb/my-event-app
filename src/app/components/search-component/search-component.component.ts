import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { EventResponse } from 'src/app/models/event-response';
import { EventRequestWithoutApiKey } from 'src/app/models/event-request-without-api-key';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  /**
   * @param  {NgForm} formData
   * Calls event service and sets the
   * events service's property events
   * to a new array of events
   */
  searchFormSubmit(formData: NgForm) {
    const params: EventRequestWithoutApiKey = {
      keyword: formData.value.keyword,
      latlong: '',
      city: formData.value.city
    };
    this.eventService.setParameters(params);
    this.eventService.callToApiAndSaveResults();
  }



}

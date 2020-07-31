import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EventResponse } from '../models/event-response';
import { EventObject } from '../models/event-object';
import { EventRequestWithoutApiKey } from '../models/event-request-without-api-key';
import { EventRequest } from '../models/event-request';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private totalPages: number;
  private events: EventObject[];
  private parameters: EventRequest = {
    apikey: environment.apikey,
    keyword: '',
    latlong: '',
    city: '',
    page: 1
  };

  constructor(private http: HttpClient) { }

  public callEventApi(): Observable<EventResponse> {
    const parameters: any = this.parameters;
    console.log(parameters);
    return this.http.get<EventResponse>('https://app.ticketmaster.com/discovery/v2/events', {params: parameters});
  }

  public getEvents(): EventObject[] {
    return this.events;
  }

  public setEvents(eventResponse: EventResponse) {
    this.totalPages = eventResponse.page.totalPages;
    if (eventResponse._embedded) {
      this.events = eventResponse._embedded.events;
    } else {
      this.events = [];
    }
  }

  public setParameters(request: EventRequestWithoutApiKey) {
    this.parameters.city = request.city;
    this.parameters.latlong = request.latlong;
    this.parameters.keyword = request.keyword;
  }

  public setTotalPages(page: number) {
    this.totalPages = page;
  }

  public getTotalPages(): number {
    return this.totalPages;
  }
}

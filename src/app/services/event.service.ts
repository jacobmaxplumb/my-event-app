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
  private totalElements: number;
  private events: EventObject[];
  private parameters: EventRequest = {
    apikey: environment.apikey,
    keyword: '',
    latlong: '',
    city: '',
    page: 1,
    size: 25
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
    console.log(eventResponse);
    this.totalPages = eventResponse.page.totalPages;
    this.totalElements = eventResponse.page.totalElements;
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

  public getTotalPages(): number {
    return this.totalPages;
  }

  public getPageSize() {
    return this.parameters.size;
  }

  public setPageSize(pageSize: number) {
    this.parameters.size = pageSize;
  }

  public setPageNumber(pageNumber: number) {
    this.parameters.page = pageNumber;
  }

  public getTotalElements(): number {
    return this.totalElements;
  }

  public getPageNumberTimesSize(): number {
    return (this.parameters.page - 1) * this.parameters.size;
  }
}

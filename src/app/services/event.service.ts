import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EventResponse } from '../models/event-response';
import { EventObject } from '../models/event-object';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: EventObject[];

  constructor(private http: HttpClient) { }

  public callEventApi(formData: any): Observable<EventResponse> {
    const parameters = {
      page: formData.page ? formData.page : 1,
      size: formData.size ? formData.size : 25,
      apikey: environment.apikey
    };
    return this.http.get<EventResponse>('https://app.ticketmaster.com/discovery/v2/events', {params: parameters});
  }

  public getEvents(): EventObject[] {
    return this.events;
  }

  public setEvents(events: EventObject[]) {
    this.events = events;
  }
}

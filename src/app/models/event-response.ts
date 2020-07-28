import { Page } from './page';
import { EmbeddedEvents } from './embedded-events';

export interface EventResponse {
  page: Page;
  _embedded: EmbeddedEvents;
}

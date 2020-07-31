import { Image } from './image';
import { Classification } from './classification';

export interface EventObject {
  url: string;
  name: string;
  images: Image[];
  classifications: Classification[];
  dates: {
    start: {
      localDate: string,
      localTime: string
    };
  };
  info: string;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringFormatterService {
  capitalizeFirstLetter(text: string): string {
    if (text.length === 0) {
      return '';
    }

    return `${text[0].toUpperCase()}${text.substring(1, text.length)}`;
  }
}

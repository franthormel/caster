import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringManagerService {
  capitalizeFirstLetter(text: string): string {
    if (text.length === 0) {
      return '';
    }

    return `${text[0].toUpperCase()}${text.substring(1, text.length)}`;
  }

  isUppercase(line: string): boolean {
    return line === line.toUpperCase();
  }

  searchContainsText(search: string, text: string): boolean {
    const loweredSearch = search.toLowerCase();
    const loweredText = text.toLowerCase();

    const result = loweredSearch.search(loweredText) > -1;

    return result;
  }
}

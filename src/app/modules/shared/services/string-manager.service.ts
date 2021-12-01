import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringManagerService {
  capitalizeFirstLetter(text: string): string {
    let value = '';

    if (text.length > 0) {
      const firstLetter = text[0].toUpperCase();
      const restOfTheWord = text.substring(1, text.length);

      value = `${firstLetter}${restOfTheWord}`;
    }

    return value;
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

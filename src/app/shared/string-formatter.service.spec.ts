import { TestBed } from '@angular/core/testing';

import { StringFormatterService } from './string-formatter.service';

describe('StringFormatterService', () => {
  let service: StringFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('capitalizeFirstLetter()', () => {
    it('should return a value of String type', () => {
      const result = service.capitalizeFirstLetter('');

      expect(result).toBeInstanceOf(String);
    });

    it('should return an empty string if param is also empty', () => {
      const result = service.capitalizeFirstLetter('');

      expect(result.length).toBe(0);
    });

    it('should capitalize a letter', () => {
      const result = service.capitalizeFirstLetter('a');

      expect(result).toBe('A');
    });

    it('should return a string with the same length as the param', () => {
      const words = ['textual', 'carter', 'multitude'];

      for (let word of words) {
        const result = service.capitalizeFirstLetter(word);

        expect(result.length).toBe(word.length);
      }
    });

    it('should capitalize the first letter of a word', () => {
      const param = 'abdominal';
      const expected = 'Abdominal';
      const result = service.capitalizeFirstLetter(param);

      expect(result).toBe(expected);
    });

    it('should capitalize the first letter of a sentence', () => {
      const param = 'abdominal pain can be caused by indigestion';
      const expected = 'Abdominal pain can be caused by indigestion';
      const result = service.capitalizeFirstLetter(param);

      expect(result).toBe(expected);
    });
  });
});

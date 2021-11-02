import { TestBed } from '@angular/core/testing';

import { StringParserService } from './string-parser.service';

import {
  TESTING_STRINGS_UPPER_CASE as upperCasedStrings,
  TESTING_STRINGS_VARIOUS_NON_UPPER_CASE as nonUpperCasedStrings,
} from '../assets/data/testing/services/strings.testing';

describe('StringParserService', () => {
  let service: StringParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringParserService);
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

  describe('isUppercase()', () => {
    for (const upperCase of upperCasedStrings) {
      it(`should return true if param is upper cased (${upperCase})`, () => {
        const result = service.isUppercase(upperCase);

        expect(result).toBeTruthy();
      });
    }

    for (const nonUpperCase of nonUpperCasedStrings) {
      it(`should return false if param is not upper cased (${nonUpperCase})`, () => {
        const result = service.isUppercase(nonUpperCase);

        expect(result).toBeFalsy();
      });
    }
  });
});

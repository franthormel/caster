import { TestBed } from '@angular/core/testing';

import { StringManagerService } from './string-manager.service';

import {
  STRINGS_UPPER,
  STRINGS_LETTER_SMALL,
  STRINGS_LETTERS_BIG,
  STRINGS_WORDS_SMALL,
  STRINGS_WORDS_BIG,
  STRINGS_SENTENCES_SMALL,
  STRINGS_SENTENCES_BIG,
} from '../../../tests/services/strings.testing';

describe('StringManagerService', () => {
  let service: StringManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('methods()', () => {
    describe('capitalizeFirstLetter()', () => {
      it('should return a value of String type', () => {
        const result = service.capitalizeFirstLetter('');

        expect(result).toBeInstanceOf(String);
      });

      it('should return an empty string if param is also empty', () => {
        const expected = '';
        const result = service.capitalizeFirstLetter(expected);

        expect(result).toBe(expected);
      });

      it('should capitalize a letter', () => {
        for (const i in STRINGS_LETTER_SMALL) {
          const input = STRINGS_LETTER_SMALL[i];
          const expected = STRINGS_LETTERS_BIG[i];

          const result = service.capitalizeFirstLetter(input);

          expect(result).toBe(expected);
        }
      });

      it('should return a string with the same length as the param', () => {
        for (const word of STRINGS_UPPER) {
          const expected = word.length;
          const result = service.capitalizeFirstLetter(word);

          expect(result.length).toBe(expected);
        }
      });

      it('should capitalize the first letter of a word', () => {
        for (const i in STRINGS_WORDS_SMALL) {
          const param = STRINGS_WORDS_SMALL[i];
          const expected = STRINGS_WORDS_BIG[i];

          const result = service.capitalizeFirstLetter(param);

          expect(result).toBe(expected);
        }
      });

      it('should capitalize the first letter of a sentence', () => {
        for (const i in STRINGS_SENTENCES_SMALL) {
          const param = STRINGS_SENTENCES_SMALL[i];
          const expected = STRINGS_SENTENCES_BIG[i];

          const result = service.capitalizeFirstLetter(param);

          expect(result).toBe(expected);
        }
      });
    });

    describe('searchContainsText()', () => {
      it('should return a Boolean', () => {
        const result = service.searchContainsText('', '');

        expect(result).toBeInstanceOf(Boolean);
      });
      it('should return true when expected if both params are lower cased', () => {
        const result = service.searchContainsText('higher', 'hi');

        expect(result).toBeTruthy();
      });
      it('should return true when expected if both params are upper cased', () => {
        const result = service.searchContainsText('TANTRUM', 'RUM');

        expect(result).toBeTruthy();
      });
      it('should return true when expected if both params have random casings', () => {
        const result = service.searchContainsText('PIlOt', 'loT');

        expect(result).toBeTruthy();
      });
      it('should return true when expected if text is uppercased', () => {
        const result = service.searchContainsText('pillow', 'low');

        expect(result).toBeTruthy();
      });
      it('should return true when expected if search is uppercased', () => {
        const result = service.searchContainsText('MARKER', 'arker');

        expect(result).toBeTruthy();
      });
      it('should return false when expected if both params are lower cased', () => {
        const result = service.searchContainsText('painting', 'barge');

        expect(result).toBeFalsy();
      });
      it('should return false when expected if both params are upper cased', () => {
        const result = service.searchContainsText('mantis', 'concrete');

        expect(result).toBeFalsy();
      });
      it('should return false when expected if both params have random casings', () => {
        const result = service.searchContainsText('cLOthEd', 'TaRgEts');

        expect(result).toBeFalsy();
      });
      it('should return false when expected if text is uppercased', () => {
        const result = service.searchContainsText('goner', 'MARK');

        expect(result).toBeFalsy();
      });
      it('should return false when expected if search is uppercased', () => {
        const result = service.searchContainsText('PITCHES', 'night');

        expect(result).toBeFalsy();
      });
    });

    describe('isUppercase()', () => {
      it('should return a Boolean', () => {
        const result = service.isUppercase('');

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return true if param is upper cased', () => {
        for (const param of STRINGS_UPPER) {
          const result = service.isUppercase(param);

          expect(result).toBeTruthy();
        }
      });

      it('should return false if param is not upper cased', () => {
        for (const param of STRINGS_SENTENCES_SMALL) {
          const result = service.isUppercase(param);

          expect(result).toBeFalsy();
        }
      });
    });


    

  });
});

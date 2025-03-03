import { makeFirstLetterUppercase, makeFirstUppercaseString } from '../makeFirstLetterUppercase';

describe('makeFirstLetterUppercase', () => {
    it('should capitalize the first letter of a single word', () => {
        expect(makeFirstLetterUppercase('hello')).toBe('Hello');
    });

    it('should not change a word that already starts with an uppercase letter', () => {
        expect(makeFirstLetterUppercase('Hello')).toBe('Hello');
    });

    it('Empty string', () => {
        expect(makeFirstLetterUppercase('')).toBe('');
    });
});

describe('makeFirstUppercaseString', () => {
    it('should capitalize the first letter of each string in an array', () => {
        const input = ['hello', 'world'];
        const output = 'Hello, World';
        expect(makeFirstUppercaseString(input)).toBe(output);
    });

    it('should handle an array with a single element', () => {
        const input = ['hello'];
        const output = 'Hello';
        expect(makeFirstUppercaseString(input)).toBe(output);
    });

    it('should handle an empty array', () => {
        const input: string[] = [];
        const output = '';
        expect(makeFirstUppercaseString(input)).toBe(output);
    });

    it('should handle an array with empty strings', () => {
        const input = ['', ''];
        const output = ', ';
        expect(makeFirstUppercaseString(input)).toBe(output);
    });
});

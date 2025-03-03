import { validationSchema } from './validation';

describe('validationSchema', () => {
    it('should validate successfully when diet or dish is specified', async () => {
        const validData = {
            diet: 'Balanced',
            dish: 'Low-carb',
            query: 'avacado',
        };
        await expect(validationSchema.validate(validData)).resolves.toBe(validData);
    });

    it('should throw an error when diet and dish are not specified and query is missing', async () => {
        const invalidData = {
            diet: undefined,
            dish: undefined,
            query: undefined,
        };
        await expect(validationSchema.validate(invalidData)).rejects.toThrow(
            'Search hint, dish type or diet type must be specified!'
        );
    });

    it('should throw an error when query is shorter than 5 characters', async () => {
        const invalidData = {
            diet: 'vegetarian',
            dish: 'main course',
            query: 'st',
        };
        await expect(validationSchema.validate(invalidData)).rejects.toThrow('Search hint must be 5 symbols!');
    });

    it('should throw an error when query is longer than 50 characters', async () => {
        const invalidData = {
            diet: 'High-protein',
            dish: 'Balanced',
            query: 'A very long query that exceeds the maximum length of 50 characters allowed',
        };
        await expect(validationSchema.validate(invalidData)).rejects.toThrow(
            'Search hint must be shorter than 50 symbols!'
        );
    });

    it('should validate successfully when only query is specified', async () => {
        const validData = {
            diet: '',
            dish: '',
            query: 'Valid query string',
        };
        await expect(validationSchema.validate(validData)).resolves.toBe(validData);
    });

    it('should validate successfully when dish is specified and query is provided', async () => {
        const validData = {
            diet: '',
            dish: 'main course',
            query: 'Delicious recipe',
        };
        await expect(validationSchema.validate(validData)).resolves.toBe(validData);
    });

    it('should validate successfully when diet is specified and query is provided', async () => {
        const validData = {
            diet: 'vegetarian',
            dish: '',
            query: 'Healthy recipe',
        };
        await expect(validationSchema.validate(validData)).resolves.toBe(validData);
    });
});

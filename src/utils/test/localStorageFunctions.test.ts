import { getItemFromLocalStorage, removeItemFromLocalStorage, setItemToLocalStorage } from '../LocalStorag';

beforeEach(() => {
    localStorage.clear();
});

describe('setItemToLocalStorage', () => {
    it('to set  item in localStorage', () => {
        setItemToLocalStorage('testKey', JSON.stringify({ data: 'testData' }));

        expect(localStorage.getItem('testKey')).toBe(JSON.stringify({ data: 'testData' }));
    });
});

describe('getItemFromLocalStorage', () => {
    it('return an item from localStorage', () => {
        localStorage.setItem('testKey', JSON.stringify({ data: 'testData' }));

        const result = getItemFromLocalStorage('testKey');
        expect(result).toEqual({ data: 'testData' });
    });

    it('return null if the item does not exist', () => {
        const result = getItemFromLocalStorage('nonExistentKey');
        expect(result).toBeNull();
    });
});

describe('removeItemFromLocalStorage', () => {
    it('remove an item from localStorage', () => {
        localStorage.setItem('testKey', JSON.stringify({ data: 'testData' }));

        removeItemFromLocalStorage('testKey');
        expect(localStorage.getItem('testKey')).toBeNull();
    });
});

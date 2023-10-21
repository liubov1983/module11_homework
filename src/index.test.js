import { getMonth } from './index.js';

describe('get the name of the month by number', () => {
    test('number 3 equal март', () => {
        expect(getMonth(3)).toBe('март');
    }),
    test('number 13 equal ошибка данных', () => {
        expect(getMonth(13)).toBe('ошибка данных');
    }),
    test('string 3 equal ошибка данных', () => {
        expect(getMonth(0)).toBe('ошибка данных');
    })
});

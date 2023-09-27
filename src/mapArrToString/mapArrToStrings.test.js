const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Корректное значение', () => {
    expect(mapArrToStrings([1,4,6,7])).toEqual(['1', '4', '6', '7']);
})
test('Мешанина', () => {
    expect(mapArrToStrings([undefined, 'tyty', 3, 6, null])).toEqual(['3', '6']);
})
test('Пустой массив', () => {
    expect(mapArrToStrings([])).toEqual([]);
})
test('Отрицание', () => {
    expect(mapArrToStrings([1,2,3])).not.toEqual([1,2,3,4]);
})
// test('Пограничное значение снизу', () => {
//     expect(mapArrToStrings(100)).toBe(true);
// })
})
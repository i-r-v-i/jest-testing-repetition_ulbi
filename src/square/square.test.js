const square = require('./square');

describe('square', () => {
    let mockValue;
    // вызывается перед каждым тестом
    beforeEach(() => {
        mockValue = Math.random();
    })

    test('Корректное значение', () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
})
// test('Мешанина', () => {
//     expect(squares()).toEqual();
// })
})
const validateValue = require('./validateValue');

// test('Валидация значения', () => {
//     // если проверяем только одно значение, то вызываем функцию expect
// expect(validateValue(50)).toBe(true);

// если нужно проверить несколько значений, то вызываем describe вместо одного expect, это обертка над кейсами

describe('validateValue', () => {
    test('Корректное значение', () => {
    expect(validateValue(50)).toBe(true);
})
test('Меньше корректного', () => {
    expect(validateValue(-1)).toBe(false);
})
test('Больше корректного', () => {
    expect(validateValue(101)).toBe(false);
})
test('Пограничное значение сверху', () => {
    expect(validateValue(0)).toBe(true);
})
test('Пограничное значение снизу', () => {
    expect(validateValue(100)).toBe(true);
})
})

// в терминале вводим команду для запуска тестов npm run test. Также можно запустить проверку для одного конкретного файла, тогда необходимо добавить к команде имя файла validateValue.test.js


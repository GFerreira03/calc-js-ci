const { somar } = require('./calculadora');

test('Somar dois números', () => {
    expect(somar(2, 3)).toBe(5);
    expect(somar(2.5, 3.25)).toBe(5.75);
    expect(somar(2, 0)).toBe(2);
});

test('Somar dois números negativos', () => {
    expect(somar(-1, -1)).toBe(-2);
});

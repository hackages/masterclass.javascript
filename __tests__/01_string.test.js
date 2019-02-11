describe.skip('Strings', () => {
  test('concatenation', () => {
    const fruit = 'apple';
    const dish = 'pie';
    expect(fruit + ' ' + dish).toEqual(__);
  });

  test('character Type', () => {
    const characterType = typeof 'Amory'.charAt(1);
    expect(characterType).toEqual(__);
  });

  test('escape character', () => {
    const stringWithAnEscapedCharacter = '\u0041pple';
    expect(stringWithAnEscapedCharacter).toEqual(__);
  });

  describe('String as Array', () => {
    test('string.length', () => {
      const fruit = 'apple';
      expect(fruit.length).toEqual(__);
    });

    test('slice', () => {
      const fruit = 'apple pie';
      expect(fruit.slice(0, 5)).toEqual(__);
    });
  });
});

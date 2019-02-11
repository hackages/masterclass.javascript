describe.skip('Basics JavaScript concepts', () => {
  describe('About Equality', () => {
    test('numeric equality', () => {
      expect(3 + 4).toEqual(__);
    });

    test('string equality', () => {
      expect(3 + '7').toEqual(__);
    });

    test('equality without type coercion', () => {
      expect(3 === 3).toEqual(__);
    });

    test('equality with type coercion', () => {
      expect(3 == '3').toEqual(__);
      expect(3 === '3').toEqual(__);
    });

    test('equality with object', () => {
      const vic = { name: 'Vic' };
      const milen = vic;
      expect(vic === milen).toEqual(__);
      expect(vic === { name: 'Vic' }).toEqual(__);
    });

    test('Are 2 strings equal?', () => {
      const apple = 'apple';
      expect('apple' === apple).toEqual(__);
    });

    test('How about NaN', () => {
      expect(NaN === NaN).toEqual(__);
    });
  });

  describe('About Truthyness', () => {
    test('truthyness of postestive numbers', () => {
      const oneIsTruthy = 1 ? true : false;
      expect(oneIsTruthy).toEqual(__);
    });

    test('truthyness of negative numbers', () => {
      const negativeOneIsTruthy = -1 ? true : false;
      expect(negativeOneIsTruthy).toEqual(__);
    });

    test('truthyness of zero', () => {
      const zeroIsTruthy = 0 ? true : false;
      expect(zeroIsTruthy).toEqual(__);
    });

    test('truthyness of null', () => {
      const nullIsTruthy = null ? true : false;
      expect(nullIsTruthy).toEqual(__);
    });

    test('null coalescing', () => {
      const result = null || 'a value';
      expect(result).toEqual(__);
    });
  });
});

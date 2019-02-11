describe.skip('Objects', () => {
  test('object type', () => {
    const empty_object = {};
    expect(typeof empty_object).toEqual(__);
  });

  test('object literal notation', () => {
    let person = {
      __: __,
      __: __
    };
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  test('dynamically adding properties', () => {
    const person = {};
    person.__ = 'Amory Blaine';
    person.__ = 102;
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  test('adding properties from strings', () => {
    const person = {};
    person['__'] = 'Amory Blaine';
    person['__'] = 102;
    expect('Amory Blaine').toEqual(person.name);
    expect(102).toEqual(person.age);
  });

  test('adding functions', () => {
    const person = {
      name: 'Amory Blaine',
      age: 102,
      toString: () => {
        return __;
      }
    };
    expect('I Amory Blaine am 102 years old.').toEqual(person.toString());
  });
});

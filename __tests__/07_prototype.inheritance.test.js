describe.skip('Prototypal Inheritance', () => {
  // this 'class' pattern defines a class by its constructor
  const Mammal = function(name) {
    this.name = name;
  };
  // things that don't need to be set in the constructor should be added to the constructor's prototype property.
  Mammal.prototype = {
    sayHi: function() {
      return 'Hello, my name is ' + this.name;
    }
  };

  it("defining a 'class'", () => {
    const eric = new Mammal('Eric');
    expect(eric.sayHi()).toEqual(__);
  });

  // add another function to the Mammal 'type' that uses the sayHi function
  Mammal.prototype.favouriteSaying = function() {
    return this.name + "'s favourite saying is " + this.sayHi();
  };

  it('more functions', () => {
    const bobby = new Mammal('Bobby');
    expect(bobby.favouriteSaying()).toEqual(__);
  });

  it('calling functions added to a prototype after an object was created', () => {
    const paul = new Mammal('Paul');
    Mammal.prototype.numberOfLettersInName = function() {
      return this.name.length;
    };
    // the following statement asks the paul object to call a function that was added
    // to the Mammal prototype after paul was constructed.
    expect(paul.numberOfLettersInName()).toEqual(__);
  });

  // helper function for inheritance.
  // From https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_Revisited
  function extend(child, supertype) {
    child.prototype = Object.create(supertype.prototype);
    child.prototype.constructor = child;
  }

  // "Subclass" Mammal
  function Bat(name, wingspan) {
    Mammal.call(this, name);
    this.wingspan = wingspan;
  }

  // configure inheritance
  extend(Bat, Mammal);

  it('Inheritance', () => {
    const lenny = new Bat('Lenny', '1.5m');
    expect(lenny.sayHi()).toEqual(__);
    expect(lenny.wingspan).toEqual(__);
  });

  function Sheep(name) {
    Mammal.call(this, name);
  }

  extend(Sheep, Mammal);

  Sheep.prototype.sayHi = function() {
    return 'meeeh';
  };

  it('Inheritance more in depth', () => {
    const george = new Sheep('George');
    const eric = new Mammal('Eric');
    expect(george.sayHi()).toEqual(__);
    expect(eric.sayHi()).toEqual(__);
  });
});

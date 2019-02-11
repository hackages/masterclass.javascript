describe.skip('Context with "this"', () => {
  it("'this' and the new keyword", () => {
    function User(login) {
      this.login = login;
    }

    const user = __;

    expect(user).toBeDefined();
    expect(user.login).toEqual('Victor');
  });
  it("'this' inside a method", () => {
    const person = {
      name: 'bob',
      intro: function() {
        return 'Hello, my name is ' + this.__;
      }
    };
    expect(person.intro()).toEqual(__);
  });

  it("'this' on unattached function", function() {
    const person = {
      name: 'bob',
      intro: function() {
        return 'Hello, my name is ' + this.name;
      }
    };

    const intro = person.intro;

    // if the function is not called as an object property 'this' is the global context
    // (window in a browser). This is an example. Please do not do this in practise.
    window.__ = 'Martine';
    expect(intro()).toEqual('Hello, my name is Martine');
  });

  describe('call vs apply vs bind', () => {
    it("'this' set explicitly with call", function() {
      const person = {
        name: 'bob',
        intro: function() {
          return 'Hello, my name is ' + this.name;
        }
      };

      // calling a function with 'call' lets us assign 'this' explicitly
      const message = person.intro.call({ __: 'Frank' });
      expect(message).toEqual('Hello, my name is Frank');
    });
    it("'this' set explicitly with apply", function() {
      const person = {
        name: 'bob',
        intro: function() {
          return 'Hello, my name is ' + this.name;
        }
      };

      // calling a function with 'call' lets us assign 'this' explicitly
      const message = person.intro.apply({ __: 'Frank' });
      expect(message).toEqual('Hello, my name is Frank');
    });

    it("'this' predefined with bind", function() {
      const person = {
        name: 'bob',
        intro: function() {
          return 'Hello, my name is ' + this.name;
        }
      };

      const intro = person.intro.bind({ name: 'Marta' });

      expect(intro()).toEqual('Hello, my name is Marta');
    });
  });
});

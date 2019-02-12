import {} from '../src/index';

describe.skip('Lodash Library: ', () => {
  describe('identity', () => {
    test('Should return the same value that has been passed', () => {
      expect(identity(1)).toEqual(1);
      expect(identity({})).toEqual({});
      expect(identity('Hackages')).toEqual('Hackages');
    });
  });

  describe('first: does not mutate the collection', () => {
    const items = [1, 9, 10, undefined];

    test('Should throw an error if no argument is passed', () => {
      expect(() => {
        first();
      }).toThrowError();
    });

    test('Should return the first element of the collection', () => {
      expect(first(items)).toEqual(1);
    });

    test('Should return the first n elements when a second argument is passed', () => {
      expect(first(items, 0)).toEqual(1);
      expect(first(items, 1)).toEqual([1]);
      expect(first(items, 2)).toEqual([1, 9]);
    });
  });
  describe('last', () => {
    const items = [1, 9, 10, 'Hackages'];

    test('Should throw an error if no collection is passed', () => {
      expect(() => {
        last();
      }).toThrowError();
    });

    test('Should return the last element of the collection', () => {
      expect(last(items)).toEqual('Hackages');
    });

    test('Should return the last n elements when a second argument is passed', () => {
      expect(last(items, 0)).toEqual('Hackages');
      expect(last(items, 1)).toEqual(['Hackages']);
      expect(last(items, 2)).toEqual([10, 'Hackages']);
    });
  });

  describe('forEach', () => {
    describe('Dealing with the wrong arguments', () => {
      test('Should throw an error if no collection nor callback is passed', () => {
        expect(() => {
          forEach();
        }).toThrowError();
      });

      test('Should throw an error if no collection nor callback is passed', () => {
        expect(() => {
          forEach([]);
        }).toThrowError();
      });

      test('Should be called with an array or an object as first argument and a function as second argument', () => {
        expect(() => {
          forEach({}, 12);
        }).toThrowError();
        expect(() => {
          forEach(12, () => {});
        }).toThrowError();
        expect(() => {
          forEach(false, {});
        }).toThrowError();
        expect(() => {
          forEach(true, () => {});
        }).toThrowError();
        expect(() => {
          forEach('', () => {});
        }).toThrowError();
        expect(() => {
          forEach(undefined, () => {});
        }).toThrowError();
      });
    });

    describe('Passing the right arguments', () => {
      const _ = { identity };
      const spy = jest.spyOn(_, 'identity');

      afterEach(() => {
        spy.mockClear();
      });

      test('Should always return undefined', () => {
        expect(forEach([], identity)).toBeUndefined();
      });

      describe('forEach on Array', () => {
        const items = [1, 9, 10, 'Hackages'];
        test('Should call the callback on every item of the array with these arguments: the current item, its position and the collection itself', () => {
          forEach(items, spy);
          expect(spy.mock.calls.length).toEqual(4);
          expect(spy.mock.calls[0]).toEqual([1, 0, items]);
          expect(spy.mock.calls[1]).toEqual([9, 1, items]);
          expect(spy.mock.calls[2]).toEqual([10, 2, items]);
          expect(spy.mock.calls[3]).toEqual(['Hackages', 3, items]);
        });
      });
      describe('forEach on Object', () => {
        const user = { name: 'Dasha', company: 'Hackages', city: 'Brussels' };
        test('Should call the callback on every property of the object with these arguments: value, key and the object itself', () => {
          forEach(user, spy);
          expect(spy.mock.calls.length).toEqual(3);
          expect(spy.mock.calls[0]).toEqual(['Dasha', 'name', user]);
          expect(spy.mock.calls[1]).toEqual(['Hackages', 'company', user]);
          expect(spy.mock.calls[2]).toEqual(['Brussels', 'city', user]);
        });
      });
    });
  });

  describe('map', () => {
    describe('Dealing with the wrong arguments', () => {
      test('Should throw an error if no collection nor callback is passed', () => {
        expect(() => {
          map();
        }).toThrowError();
      });

      test('Should throw an error if no collection nor callback is passed', () => {
        expect(() => {
          map([]);
        }).toThrowError();
      });

      test('Should be called with an array or an object as first argument and a function as second argument', () => {
        expect(() => {
          map({}, 12);
        }).toThrowError();
        expect(() => {
          map(12, () => {});
        }).toThrowError();
        expect(() => {
          map(false, {});
        }).toThrowError();
        expect(() => {
          map(true, () => {});
        }).toThrowError();
        expect(() => {
          map('', () => {});
        }).toThrowError();
        expect(() => {
          map(undefined, () => {});
        }).toThrowError();
      });
    });

    describe('Passing the right arguments', () => {
      const _ = {
        identity
      };
      const spy = jest.spyOn(_, 'identity');

      test('Should return an empty array if it receives an empty array', () => {
        expect(map([], () => {})).toEqual([]);
      });

      describe('map on an Array', () => {
        const items = [1, 9, 10, 12];
        test('Should call the callback on every item of the array with these arguments: the current item, its position and the collection itself', () => {
          map(items, spy);
          expect(spy.mock.calls.length).toEqual(4);
          expect(spy.mock.calls[0]).toEqual([1, 0, items]);
          expect(spy.mock.calls[1]).toEqual([9, 1, items]);
          expect(spy.mock.calls[2]).toEqual([10, 2, items]);
          expect(spy.mock.calls[3]).toEqual([12, 3, items]);
          spy.mockClear();
        });
        test('Should return a new array with each element doubled', () => {
          const actual = map(items, x => x * 2);
          expect(actual).toEqual([2, 18, 20, 24]);
        });
      });
      describe('map on an Object', () => {
        const user = { name: 'Dasha', company: 'Hackages', city: 'Brussels' };
        test('Should call the callback on every property of the object with these arguments: value, key and the object itself', () => {
          map(user, spy);
          expect(spy.mock.calls.length).toEqual(3);
          expect(spy.mock.calls[0]).toEqual(['Dasha', 'name', user]);
          expect(spy.mock.calls[1]).toEqual(['Hackages', 'company', user]);
          expect(spy.mock.calls[2]).toEqual(['Brussels', 'city', user]);
        });
        test('Should return a new array with value Uppercased', () => {
          const actual = map(user, x => x.toUpperCase());
          expect(Array.isArray(actual)).toEqual(true);
          expect(actual).toEqual(['DASHA', 'HACKAGES', 'BRUSSELS']);
        });
      });
    });
  });

  describe('find', () => {
    test('Should throw an error if no predicate is passed', () => {
      expect(() => {
        find();
      }).toThrowError();
    });

    test('should return undefined if none of the elements match the predicate', () => {
      const isEven = num => num % 2 === 0;
      const evens = find([1, 3, 7, 5], isEven);
      expect(evens).toBeUndefined();
    });

    test('should return the first element that matchs the predicate', () => {
      const isOdd = num => num % 2;
      const odds = find([10, 2, 3, 4, 5, 6], isOdd);
      expect(odds).toEqual(3);
    });
  });

  // Bonus: re-rewrite reduce, fill, keys, values and entries

  describe('reduce', () => {});
  describe('fill', () => {});
  describe('keys', () => {});
  describe('values', () => {});
  describe('entries', () => {});
});

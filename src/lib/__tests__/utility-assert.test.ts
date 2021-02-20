import Assert from '../utility-assert';

class CustomError implements Error {
  name: string;
  message: string;

  constructor(message: string) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = 'Assert Condition Error';
    this.message = `Custom Error - ${message}`;
  }
}

describe('Assert', () => {
  describe('conditionError', () => {
    it('triggers the error message', () => {
      const mockResultCondicion = false;
      const messageError = 'jump error';

      expect(() => Assert.conditionError(mockResultCondicion, messageError)).toThrow(messageError);
    });

    it('return custom error', () => {
      const mockResultCondicion = false;
      const messageError = 'jump error';

      expect(() =>
        Assert.conditionError(mockResultCondicion, messageError, CustomError as ErrorConstructor)
      ).toThrow(`Custom Error - ${messageError}`);
    });

    it('returns the default message', () => {
      const mockResultCondicion = false;
      const messageError = 'assertion failed';

      expect(() => Assert.conditionError(mockResultCondicion)).toThrow(messageError);
    });

    it('does not take action', () => {
      const mockResultCondicion = true;

      expect(() => Assert.conditionError(mockResultCondicion)).not.toThrowError();
    });
  });
  describe.each([
    ['returns true if the key is inside the object', 'a', true],
    ['returns false if the key is not inside the object', 'd', false]
  ])('keyExists', (caseName, keyName, result) => {
    const customObject = { a: 1, b: 2, c: 3 };
    it(caseName, () => {
      expect(Assert.keyExists(customObject, keyName)).toEqual(result);
    });
  });
});

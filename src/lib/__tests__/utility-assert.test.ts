import Assert from '../utility-assert';

describe('Assert', () => {
  describe('conditionError', () => {
    it('triggers the error message', () => {
      const mockResultCondicion = false;
      const messageError = 'jump error';

      expect(() => Assert.conditionError(mockResultCondicion, messageError)).toThrow(messageError)
    });

    it('return custom error', () => {
      const mockResultCondicion = false;
      const messageError = 'jump error';

      expect(() => Assert.conditionError(mockResultCondicion, messageError, <ErrorConstructor>CustomError))
        .toThrow(`Custom Error - ${messageError}`)
    });

    it('returns the default message', () => {
      const mockResultCondicion = false;
      const messageError = 'assertion failed';

      expect(() => Assert.conditionError(mockResultCondicion)).toThrow(messageError)
    });

    it('does not take action', () => {
      const mockResultCondicion = true;

      expect(() => Assert.conditionError(mockResultCondicion)).not.toThrowError()
    });
  });
});

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

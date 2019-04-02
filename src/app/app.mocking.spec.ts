describe('jest.fn', () => {
  describe('When you need to emulate a dependency', () => {
    it('you should use fn', () => {
      const mock = jest.fn();

      mock(1);

      expect(mock).toBeCalledWith(1);
    });
  });

  describe('When you need to build more complex mocks', () => {
    it('you should use multiple jest.fns', () => {
      const nestedMock = {
        count: jest.fn(),
        greet: jest.fn()
      };

      nestedMock.greet('Hey 🚀!');

      expect(nestedMock.greet).toHaveBeenCalledWith(
        expect.stringContaining('🚀')
      );
    });
  });
});

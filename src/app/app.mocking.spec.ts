describe('jest.fn', () => {
  describe('When you need to emulate a dependency', () => {
    it('you should use fn', () => {
      const mock = jest.fn();

      mock(1);

      expect(mock).toBeCalledWith(1);
    });
  });
});

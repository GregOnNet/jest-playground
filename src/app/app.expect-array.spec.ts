describe('expect.arrayContaining', () => {
  describe('When you assert a subset of an array', () => {
    it('you should use the helper arrayContaining', () => {
      const collection = [
        { name: 'Scott', age: 18 },
        { name: 'Peterson', age: 42 },
        { name: 'Leicester', age: 93 },
        { name: 'Anderson', age: 38 }
      ];

      expect(collection).toEqual(
        expect.arrayContaining([
          { name: 'Anderson', age: expect.any(Number) },
          { name: 'Leicester', age: expect.any(Number) }
        ])
      );
    });
  });
});

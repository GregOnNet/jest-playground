describe('expect.objectContaining', () => {
  describe('When you assert a subset of an object', () => {
    it('you should use the helper objectContaining', () => {
      const customer = { name: 'Anderson', age: 34 };

      expect(customer).toEqual(expect.objectContaining({ name: 'Anderson' }));
    });

    it('you may want to combine it with .toContainEqual', () => {
      const collection = [
        { name: 'Scott', age: 18 },
        { name: 'Peterson', age: 42 },
        { name: 'Leicester', age: 93 },
        { name: 'Anderson', age: 38 }
      ];

      expect(collection).toContainEqual(
        expect.objectContaining({ name: 'Anderson' })
      );
    });
  });
});

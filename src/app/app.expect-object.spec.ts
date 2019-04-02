describe('expect.objectContaining', () => {
  describe('When you assert a subset of an object', () => {
    it('you should use the helper objectContaining', () => {
      const customer = { name: 'Anderson', age: 34 };

      expect(customer).toEqual(expect.objectContaining({ name: 'Anderson' }));
    });
  });
});

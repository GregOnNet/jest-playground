describe('it.each', () => {
  describe('When you need to test the same case with different data', () => {
    it.each([{ name: 'Anderson' }, { name: 'Leicester' }])(
      'you should use it.each [%p]',
      customer => {
        expect(customer.name.length).toBeGreaterThan(3);
      }
    );
  });
});

describe('expect.any', () => {
  describe('When the expected value needs to be of a certain type', () => {
    it("you can use jest's helper any", () => {
      const customer = { name: 'Anderson', age: 34 };
      expect(customer.age).toEqual(expect.any(Number));
    });
  });
});

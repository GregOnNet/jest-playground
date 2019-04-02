describe('When you want declare some test cases before implementing them', () => {
  describe('you can create a todo', () => {
    it.todo('acts as expected');
  });
});

describe('When you need to exclude a test', () => {
  describe('you can skip the test', () => {
    it.skip('hast to be updated as fast as possible', () => {
      /* intentionally left  blank */
    });
  });
});

/*

describe('When you need focus a certain test', () => {
  describe('you can focus the test', () => {
    it.only('hast to be updated as fast as possible', () => {
      // intentionally left  blank
    });
  });
});

*/

import { of } from 'rxjs';

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

  describe('When you need to emulate a certain behaviour', () => {
    it('you should give mockImplmentation a try', () => {
      const getMock = jest
        .fn()
        .mockImplementation((apiUrl: string) => of(`${apiUrl}: success`));

      const url = 'http://localhost:4200';
      const http = { get: getMock };

      http.get(url).subscribe((response: string) => {
        expect(response).toBe(`${url}: success`);
      });
    });
  });
});

// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  roots: ['src'],
  globals: {
    'ts-jest': {
      tsConfig: 'src/tsconfig.spec.json'
    }
  },
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@env': '<rootDir>/src/environments/environment',
    '@src/(.*)': '<rootDir>/src/src/$1',
    '@state/(.*)': '<rootDir>/src/app/state/$1'
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-test))']
};

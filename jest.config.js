module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
      '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest'
       ],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  "collectCoverage": true,
  "coverageReporters": ["lcov"],
  "coverageDirectory": "test-coverage",
  "coverageThreshold": {
   "global": {
   "branches": 0,
   "functions": 0,
   "lines": 0,
   "statements": 0
   }
  },

};
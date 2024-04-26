module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '\\.svg$': 'jest-transform-stub',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    // Agregar transformador para archivos SVG
    
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react(-.*)?|@react(-community)?|@rneui|react-redux)/)",
    
  ],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/test/__mocks__/fileMock.js',
  },
};

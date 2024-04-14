module.exports = {
    testEnvironment: "node",
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    transformIgnorePatterns: [
      "node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|@rneui|@testing-library/jest-dom/extend-expect)/)",
    ],
  };
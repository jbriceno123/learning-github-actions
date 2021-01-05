module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  roots: ['src/'],
  testEnvironment: 'node',
  testRegex: 'src(/.*)?/__tests__/[^/]*\\.test\\.(ts|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  setupFilesAfterEnv: [

  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/__tests__/**/*.*'
  ],
  coverageReporters: [
    'text-summary',
    'lcov',
    'html'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};

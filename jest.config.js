module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@utils-types$': '<rootDir>/src/utils/types',
    '^@api$': '<rootDir>/src/utils/burger-api.ts',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@ui(.*)$': '<rootDir>/src/components/ui$1',
    '^@store$': '<rootDir>/src/services/store',
    '^@slices(.*)$': '<rootDir>/src/services/slices$1'
  }
};

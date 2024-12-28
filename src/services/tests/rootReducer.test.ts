/// <reference types="jest" />

import { rootReducer } from '../rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import { expect } from '@jest/globals';

test('Тест инициализации rootReducer', () => {
  const store = configureStore({
    reducer: rootReducer
  });

  const initialState = store.getState();
  expect(rootReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(
    initialState
  );
});

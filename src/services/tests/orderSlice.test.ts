/// <reference types="jest" />

import { describe, expect, test } from '@jest/globals';
import {
  orderReducer as reducer,
  getOrderByNumber,
  getOrder,
  initialState
} from '../slices/orderSlice';
import { mockOrderByNumber, mockOrders } from './mockData';

describe('Тестирование экшенов заказов', () => {
  test('Тест начального состояния заказов', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });
});

describe('Тестирование редьюсеров для getOrderByNumber', () => {
  test('Тест состояния getOrderByNumber.pending', () => {
    const action = { type: getOrderByNumber.pending.type };
    const state = reducer(initialState, action);
    expect(state.error).toBe(null);
    expect(state.loading).toBe(true);
    expect(state.currentOrder).toBe(null);
  });

  test('Тест состояния getOrderByNumber.rejected', () => {
    const errorMessage = 'Ошибка загрузки getOrderByNumber';
    const action = {
      type: getOrderByNumber.rejected.type,
      error: { message: errorMessage }
    };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });

  test('Тест состояния getOrderByNumber.fulfilled', () => {
    const action = {
      type: getOrderByNumber.fulfilled.type,
      payload: mockOrderByNumber
    };
    const state = reducer(initialState, action);
    expect(state.error).toBe(null);
    expect(state.loading).toBe(false);
    expect(state.currentOrder).toEqual(mockOrderByNumber.orders[0]);
  });
});

describe('Тестирование редьюсеров для getOrder', () => {
  test('Тест состояния getOrder.pending', () => {
    const action = { type: getOrder.pending.type };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test('Тест состояния getOrder.rejected', () => {
    const errorMessage = 'Ошибка загрузки getOrder';
    const action = {
      type: getOrder.rejected.type,
      error: { message: errorMessage }
    };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(errorMessage);
  });

  test('Тест состояния getOrder.fulfilled', () => {
    const action = { type: getOrder.fulfilled.type, payload: mockOrders };
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
    expect(state.orders).toEqual(mockOrders);
  });
});

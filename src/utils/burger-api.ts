import { setCookie, getCookie } from './cookie';
import { TIngredient } from './types';

const URL = process.env.BURGER_API_URL;

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getIngredientsApi = (): Promise<TIngredient[]> =>
  fetch(`${URL}/ingredients`)
    .then((res) =>
      checkResponse<{ success: boolean; data: TIngredient[] }>(res)
    )
    .then((data) => {
      if (data.success) return data.data;
      throw new Error('Failed to fetch ingredients');
    });

export const forgotPasswordApi = (data: { email: string }) =>
  fetch(`${URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  }).then((res) => checkResponse<{ success: boolean }>(res));

export const resetPasswordApi = (data: { password: string; token: string }) =>
  fetch(`${URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  }).then((res) => checkResponse<{ success: boolean }>(res));

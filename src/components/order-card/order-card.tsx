import { FC, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { OrderCardProps } from './type';
import { TIngredient } from '@utils-types';
import { OrderCardUI } from '../ui/order-card';
import { useSelector } from '../../services/store';
import { getIngredientsState } from '../../services/slices/ingredientsSlice';

const maxIngredients = 6;

export const OrderCard: FC<OrderCardProps> = ({ order }) => {
  const location = useLocation();
  const ingredients: TIngredient[] = useSelector(getIngredientsState);

  const orderInfo = useMemo(() => {
    if (!ingredients.length) return null;

    const ingredientsInfo = order.ingredients.reduce(
      (acc: TIngredient[], item: string) => {
        const ingredient = ingredients.find((ing) => ing._id === item);
        if (ingredient) acc.push(ingredient);
        return acc;
      },
      []
    );

    const total = ingredientsInfo.reduce(
      (sum, ingredient) => sum + ingredient.price,
      0
    );

    const ingredientsToShow = ingredientsInfo.slice(0, maxIngredients);

    const remains =
      ingredientsInfo.length > maxIngredients
        ? ingredientsInfo.length - maxIngredients
        : 0;

    const date = new Date(order.createdAt);

    return {
      ...order,
      ingredientsInfo,
      ingredientsToShow,
      remains,
      total,
      date
    };
  }, [order, ingredients]);

  if (!orderInfo) return null;

  return (
    <OrderCardUI
      orderInfo={orderInfo}
      maxIngredients={maxIngredients}
      locationState={{ background: location }}
    />
  );
};

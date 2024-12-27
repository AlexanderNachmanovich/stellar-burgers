import { FC, useEffect } from 'react';
import { Preloader } from '../ui/preloader';
import { OrderInfoUI } from '../ui/order-info';
import { TIngredient } from '@utils-types';
import { useSelector, useDispatch } from '../../services/store';
import { useParams } from 'react-router-dom';
import {
  getOrderByNumber,
  getCurrentOrder
} from '../../services/slices/orderSlice';
import { getIngredientsState } from '../../services/slices/ingredientsSlice';

export const OrderInfo: FC = () => {
  const dispatch = useDispatch();
  const orderData = useSelector(getCurrentOrder);
  const ingredients = useSelector(getIngredientsState);
  const { number } = useParams<{ number: string }>();

  useEffect(() => {
    if (number) {
      dispatch(getOrderByNumber(parseInt(number)));
    }
  }, [dispatch, number]);

  if (!orderData || !ingredients.length) {
    return <Preloader />;
  }

  const date = new Date(orderData.createdAt);

  type TIngredientsWithCount = {
    [key: string]: TIngredient & { count: number };
  };

  const ingredientsInfo = orderData.ingredients.reduce(
    (acc: TIngredientsWithCount, item) => {
      if (!acc[item]) {
        const ingredient = ingredients.find((ing) => ing._id === item);
        if (ingredient) {
          acc[item] = {
            ...ingredient,
            count: 1
          };
        }
      } else {
        acc[item].count++;
      }

      return acc;
    },
    {}
  );

  const total = Object.values(ingredientsInfo).reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const orderInfo = {
    ...orderData,
    ingredientsInfo,
    date,
    total
  };

  return <OrderInfoUI orderInfo={orderInfo} />;
};

import { FC } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useSelector, useDispatch } from '../../services/store';
import {
  getConstructorState,
  setOrderModalData,
  createOrder,
  getOrderModalData,
  getConstructorLoading
} from '../../services/slices/constructorSlice';

import { useNavigate } from 'react-router-dom';
import { getIsAuthCheckedSelector } from '../../services/slices/userSlice';

export const BurgerConstructor: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const constructorItems = useSelector(getConstructorState);
  const user = useSelector(getIsAuthCheckedSelector);
  const orderModalData = useSelector(getOrderModalData);
  const orderRequest = useSelector(getConstructorLoading);

  const onOrderClick = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!constructorItems.bun || orderRequest) return;

    const orderData = [
      constructorItems.bun._id,
      ...constructorItems.ingredients.map((ingredient) => ingredient._id),
      constructorItems.bun._id
    ];

    dispatch(createOrder(orderData));
  };

  const closeOrderModal = () => {
    dispatch(setOrderModalData(null));
  };

  const calculatePrice = () => {
    const bunPrice = constructorItems.bun ? constructorItems.bun.price * 2 : 0;
    const ingredientsPrice = constructorItems.ingredients.reduce(
      (sum: number, item: TConstructorIngredient) => sum + item.price,
      0
    );
    return bunPrice + ingredientsPrice;
  };

  const totalPrice = calculatePrice();

  return (
    <BurgerConstructorUI
      price={totalPrice}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};

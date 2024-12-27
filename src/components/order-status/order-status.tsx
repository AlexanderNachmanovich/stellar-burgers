import React, { FC } from 'react';
import { OrderStatusProps } from './type';
import { OrderStatusUI } from '@ui';

const STATUS_TEXT: Record<string, string> = {
  pending: 'Готовится',
  done: 'Выполнен',
  created: 'Создан'
};

export const OrderStatus: FC<OrderStatusProps> = ({ status }) => {
  const getTextStyle = (status: string): string => {
    switch (status) {
      case 'pending':
        return '#E52B1A';
      case 'done':
        return '#00CCCC';
      default:
        return '#F2F2F3';
    }
  };

  const textStyle = getTextStyle(status);

  return <OrderStatusUI textStyle={textStyle} text={STATUS_TEXT[status]} />;
};

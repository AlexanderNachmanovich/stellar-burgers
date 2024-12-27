import { FC } from 'react';

import { OrdersListProps } from './type';
import { OrdersListUI } from '@ui';

export const OrdersList: FC<OrdersListProps> = ({ orders }) => {
  const sortedOrders = orders
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  return <OrdersListUI orderByDate={sortedOrders} />;
};

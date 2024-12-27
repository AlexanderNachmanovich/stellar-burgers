import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import {
  getFeed,
  getFeedApi,
  getFeedLoading
} from '../../services/slices/feedSlice';
import { useDispatch, useSelector } from '../../services/store';

export const Feed: FC = () => {
  const dispatch = useDispatch();
  const orders: TOrder[] = useSelector(getFeed).orders;
  const isLoading = useSelector(getFeedLoading);

  useEffect(() => {
    dispatch(getFeedApi());
  }, [dispatch]);

  if (isLoading || !orders.length) {
    return <Preloader />;
  }

  return (
    <FeedUI orders={orders} handleGetFeeds={() => dispatch(getFeedApi())} />
  );
};

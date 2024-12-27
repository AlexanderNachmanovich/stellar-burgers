import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/store';
import { getUserSelector } from '../../services/slices/userSlice';

export const AppHeader: FC = () => {
  const userName = useSelector((state) => getUserSelector(state)?.name || '');
  return <AppHeaderUI userName={userName} />;
};

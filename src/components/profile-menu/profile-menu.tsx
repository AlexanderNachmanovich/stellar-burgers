import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
import { useDispatch } from '../../services/store';
import { logoutUser } from '../../services/slices/userSlice';

export const ProfileMenu: FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return <ProfileMenuUI handleLogout={onLogout} pathname={location.pathname} />;
};

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  getUserSelector,
  getUserLoadingSelector
} from '../../services/slices/userSlice';
import { Preloader } from '@ui';

type ProtectedRouteProps = {
  children: React.ReactElement;
  onlyUnAuth?: boolean;
};

export const ProtectedRoute = ({
  children,
  onlyUnAuth = false
}: ProtectedRouteProps) => {
  const location = useLocation();
  const user = useSelector(getUserSelector);
  const isLoading = useSelector(getUserLoadingSelector);

  if (isLoading) {
    return <Preloader />;
  }

  if (onlyUnAuth && user) {
    return <Navigate to='/' />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

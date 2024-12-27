import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsAuthCheckedSelector } from '../../services/slices/userSlice';

interface ProtectedRouteProps {
  onlyUnAuth?: boolean;
  children: React.ReactElement;
}

export const ProtectedRoute = ({
  onlyUnAuth = false,
  children
}: ProtectedRouteProps) => {
  const currentLocation = useLocation();
  const isAuthenticated = useSelector(getIsAuthCheckedSelector);

  if (!isAuthenticated && !onlyUnAuth) {
    return <Navigate replace to='/login' state={{ from: currentLocation }} />;
  }

  if (isAuthenticated && onlyUnAuth) {
    const redirectTo = currentLocation.state?.from || { pathname: '/' };
    return <Navigate replace to={redirectTo} />;
  }

  return children;
};

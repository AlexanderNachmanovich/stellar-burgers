import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ConstructorPage } from '@pages';
import { Feed } from '@pages';
import { Login } from '@pages';
import { Register } from '@pages';
import { ForgotPassword } from '@pages';
import { ResetPassword } from '@pages';
import { Profile } from '@pages';
import { ProfileOrders } from '@pages';
import { NotFound404 } from '@pages';
import { Modal } from '@components';
import { IngredientDetails } from '@components';
import { OrderInfo } from '@components';
import '../../index.css';
import styles from './app.module.css';
import { AppHeader } from '@components';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = false; // TODO: подключить реальную проверку авторизации
  return isAuthenticated ? children : <Navigate to='/login' replace />;
};

const App = () => (
  <Router>
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        {/* Главная страница */}
        <Route path='/' element={<ConstructorPage />} />

        {/* Лента заказов */}
        <Route path='/feed' element={<Feed />} />

        {/* Авторизация */}
        <Route
          path='/login'
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />

        <Route
          path='/register'
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />

        <Route
          path='/forgot-password'
          element={
            <ProtectedRoute>
              <ForgotPassword />
            </ProtectedRoute>
          }
        />

        <Route
          path='/reset-password'
          element={
            <ProtectedRoute>
              <ResetPassword />
            </ProtectedRoute>
          }
        />

        {/* Профиль */}
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile/orders'
          element={
            <ProtectedRoute>
              <ProfileOrders />
            </ProtectedRoute>
          }
        />

        {/* Модальные окна */}
        <Route
          path='/feed/:number'
          element={
            <Modal
              title='Детали заказа'
              onClose={() => console.log('Закрыть модальное окно')}
            >
              <OrderInfo />
            </Modal>
          }
        />
        <Route
          path='/ingredients/:id'
          element={
            <Modal
              title='Детали ингредиента'
              onClose={() => console.log('Закрыть модальное окно')}
            >
              <IngredientDetails />
            </Modal>
          }
        />
        <Route
          path='/profile/orders/:number'
          element={
            <ProtectedRoute>
              <Modal
                title='Детали заказа'
                onClose={() => console.log('Закрыть модальное окно')}
              >
                <OrderInfo />
              </Modal>
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </div>
  </Router>
);

export default App;

import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, startTransition } from 'react';
import { refreshUser, register } from 'redux/Authorization/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import RegistrationComponent from './RegistrationComponent';
import Spinner from './Spinner';

const Home = lazy(() => import('../components/Home'));
const Login = lazy(() => import('../components/Login'));
const Contactlist = lazy(() => import('../components/Contactlist'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isRefreshing } = useSelector(state => state.auth);

  const handleRegistration = async (user) => {
    try {
      await startTransition(() => { // Use startTransition
        dispatch(register(user));
      });
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return !isRefreshing ? (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contactlist />} redirectTo="/login" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={
                <RegistrationComponent onRegister={handleRegistration} />
              }
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ToastContainer />
    </>
  ) : (
    <Spinner />
  );
};

export default App;

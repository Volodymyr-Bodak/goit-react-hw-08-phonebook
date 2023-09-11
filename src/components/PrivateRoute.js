import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo: addres }) => {
  const { isLoaggedIn, isRefreshing } = useSelector(state => state.auth);
  const makeRedirect = !isLoaggedIn && !isRefreshing;
  return makeRedirect ? <Navigate to={addres} /> : Component;
};
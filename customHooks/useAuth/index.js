import { useSelector } from 'react-redux';

export const useAuth = () => {
    const { user } = useSelector((state) => state.user);
    const userRole = user?.role;

  const isAuthenticated = !!userRole;
  const role = userRole || '';

  return { isAuthenticated, role };
};

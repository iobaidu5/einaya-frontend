import { useRouter } from 'next/router';
import { useAuth } from '../useAuth';

export const withAuth = (WrappedComponent, allowedRoles) => {
  const AuthenticatedComponent = (props) => {
    const { isAuthenticated, role } = useAuth();
    const router = useRouter();

    // Check if the user is authenticated
    if (!isAuthenticated) {
      // Redirect to login or unauthorized page
      // router.push('/login');
      return null;
    }

    // Check if the user has the required role
    if (!allowedRoles.includes(role)) {
      // Redirect to unauthorized page or show a message
      router.push('/unauthorized');
      return null;
    }

    // Render the protected component
    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

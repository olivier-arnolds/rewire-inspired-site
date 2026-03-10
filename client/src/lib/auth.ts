import { useState, useEffect } from 'react';
import { trpc } from './trpc';

export interface User {
  id: number;
  name: string | null;
  email: string | null;
  openId: string;
  role: 'user' | 'admin';
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: Error | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  logout: () => void;
  getLoginUrl: () => string;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { data, isLoading, error: trpcError } = trpc.user.me.useQuery();

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
      if (data) {
        setUser(data as User);
      }
      if (trpcError) {
        // Cast via unknown to avoid type overlap error
        setError(trpcError as unknown as Error);
      }
    }
  }, [data, isLoading, trpcError]);

  const logout = () => {
    window.location.href = '/api/auth/logout';
  };

  const getLoginUrl = () => {
    // Use the backend login endpoint which properly handles OAuth flow and redirect
    return `/api/auth/login?redirect=${encodeURIComponent(window.location.pathname)}`;
  };

  const isAdmin = user?.role === 'admin';

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    isAdmin,
    logout,
    getLoginUrl,
  };
}

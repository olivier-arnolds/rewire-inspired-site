import { useState, useEffect } from 'react';
import { trpc } from './trpc';

export interface User {
  id: string;
  name: string;
  email: string;
  openId: string;
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
        setUser(data);
      }
      if (trpcError) {
        setError(trpcError as Error);
      }
    }
  }, [data, isLoading, trpcError]);

  const logout = () => {
    window.location.href = '/api/auth/logout';
  };

  const getLoginUrl = () => {
    return `/api/auth/login?redirect=${encodeURIComponent(window.location.pathname)}`;
  };

  const isAdmin = user?.openId === import.meta.env.VITE_OWNER_OPEN_ID;

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

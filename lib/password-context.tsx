'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface PasswordContextType {
  isAuthenticated: boolean;
  authenticate: (password: string) => boolean;
  logout: () => void;
}

const PasswordContext = createContext<PasswordContextType>({
  isAuthenticated: false,
  authenticate: () => false,
  logout: () => {},
});

const CORRECT_PASSWORD = '5357';
const STORAGE_KEY = 'portfolio_auth';

export function PasswordProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage?.getItem?.(STORAGE_KEY);
      if (stored === 'true') {
        setIsAuthenticated(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const authenticate = (password: string): boolean => {
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      try {
        sessionStorage?.setItem?.(STORAGE_KEY, 'true');
      } catch {
        // ignore
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    try {
      sessionStorage?.removeItem?.(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <PasswordContext.Provider value={{ isAuthenticated, authenticate, logout }}>
      {children}
    </PasswordContext.Provider>
  );
}

export function usePassword() {
  return useContext(PasswordContext);
}

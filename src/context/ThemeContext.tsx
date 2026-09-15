import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to 'light' as requested by user ("better lighter version can be great")
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('amitrax_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light'; // Default to lighter version
  });

  useEffect(() => {
    localStorage.setItem('amitrax_theme', theme);
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.classList.remove('bg-[#04060d]', 'text-slate-100');
      document.body.classList.add('bg-[#f8fafc]', 'text-[#0f172a]');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      document.body.classList.remove('bg-[#f8fafc]', 'text-[#0f172a]');
      document.body.classList.add('bg-[#04060d]', 'text-slate-100');
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';

import Header from './components/Header';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

const App = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);

    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Header
          theme={theme}
          setTheme={setTheme}
          handleThemeToggle={handleThemeToggle}
        />
        <AddPostForm />
        <PostsList />
      </>
    </ThemeProvider>
  );
};

export default App;

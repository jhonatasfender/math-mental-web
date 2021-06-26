import { listOptions } from 'pages/index';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const useDarkMode = () => {
  const { setTheme } = useContext(ThemeContext);

  return () => {
    setTheme((theme) => {
      const changeTheme = theme;
      const dark = changeTheme.colors.colorsSectors('addition').darkModeActive;

      listOptions.forEach(({ sector }) => {
        changeTheme.colors.colorsSectors(sector).darkModeActive = !dark;
      });

      return changeTheme;
    });
  };
};

export default useDarkMode;

import useMakerColor from '@hook/maker-color';
import loadScript from 'load-script';
import { createContext, useEffect, useState } from 'react';

export const ContextKatex = createContext(null);

const Provider = ({ children }) => {
  const [logger] = useMakerColor();

  const [Katex, setKatex] = useState({});
  const [isKatexLoaded, setIsKatexLoaded] = useState(false);

  const load = () => {
    logger(`Katex version: ${window.katex.version}`, { color: '#32CD32' });
    setKatex(window.katex);
    setIsKatexLoaded(true);
  };

  useEffect(() => {
    loadScript(
      'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.js',
      load,
    );
  }, []);

  return (
    <ContextKatex.Provider value={isKatexLoaded ? Katex : null}>
      {children}
    </ContextKatex.Provider>
  );
};

export default Provider;


import loadScript from 'load-script';
import { createContext, useEffect, useState } from 'react';
import useMakerColor from '@hook/maker-color';

export const ContextMath = createContext(null)

const Provider = ({ children }) => {
  const [logger] = useMakerColor()

  const [MathJax, setMathJax] = useState({});
  const [isMathJaxLoaded, setIsMathJaxLoaded] = useState(false);

  const load = () => {
    logger(`MathJax version: ${window.MathJax.version}`, { color: '#32CD32' })
    setMathJax(window.MathJax);
    setIsMathJaxLoaded(true);
  }

  useEffect(() => {
    global.window.MathJax = {
      options: {
        skipHtmlTags: ['style']
      }
    }
    loadScript('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js', load)
  }, [])

  return (
    <ContextMath.Provider value={isMathJaxLoaded ? MathJax : null}>
      {children}
    </ContextMath.Provider>
  )
}

export default Provider;
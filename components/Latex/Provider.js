
import loadScript from 'load-script';
import { createContext, memo, useEffect, useState } from 'react';

export const ContextMath = createContext(null)

const Provider = memo(({ children }) => {
  const [MathJax, setMathJax] = useState({});
  const [isMathJaxLoaded, setIsMathJaxLoaded] = useState(false);

  const load = () => {
    console.log(window.MathJax.version)
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
})

export default Provider;
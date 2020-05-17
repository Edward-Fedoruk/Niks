import { useState, useEffect } from 'react';

const useBreakpoint = (width) => {
  const [state, set] = useState(false);
  useEffect(() => {
    set(window.innerWidth < width);
  }, [width]);

  return state;
};

export default useBreakpoint;

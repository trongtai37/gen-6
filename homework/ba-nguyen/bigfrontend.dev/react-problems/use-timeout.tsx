import { useRef, useEffect } from "react";

export function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const timeout = setTimeout(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);
}

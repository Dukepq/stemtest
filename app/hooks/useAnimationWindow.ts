import { useEffect, useState } from "react";

export default function useAnimationWindow<T>(
  stateVariable: T,
  delay: number,
  inverted: boolean = false
) {
  const [delayed, setDelayed] = useState<T>(stateVariable);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const pass = inverted ? !stateVariable : stateVariable;
    if (pass) {
      setAnimate(true);
      timeout = setTimeout(() => {
        setDelayed(stateVariable);
      }, delay);
    } else {
      setDelayed(stateVariable);
      setAnimate(false);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [stateVariable, delay, inverted]);

  return [delayed, animate];
}

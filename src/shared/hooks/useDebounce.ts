import { useEffect, useState } from 'react';

/**
 * The useDebounce function is used to limit the rate at which a function can fire.
 * It returns a decorator that delays the execution of the function until the end of a
 * series of rapid invocations, separated by a specified delay.
 *
 * @template T This type parameter allows the function to handle arguments of any type.
 *
 * @param {T} value An argument that is passed into the input function.
 * @param {number} delay A delay in milliseconds.
 *
 * @return {T} value The decorator returns the value of the argument after a delay.
 *
 * @example
 * const handleResize = () => {
 *   console.log(window.innerWidth);
 * };
 *
 * const debouncedHandleResize = useDebounce(handleResize, 1000);
 *
 * window.addEventListener('resize', debouncedHandleResize);
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const time = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(time);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;

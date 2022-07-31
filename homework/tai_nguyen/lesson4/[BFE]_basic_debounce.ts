type TFunction = (...args: any[]) => any;
type DebounceReturnType<T extends TFunction> = (...args: Parameters<T>) => void;

function debounce<T extends TFunction>(
  func: T,
  wait: number
): DebounceReturnType<T> {
  let timeoutId: number;

  const wrapperFunc = (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(func, ...args), wait);
  };

  return wrapperFunc;
}

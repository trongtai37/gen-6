type TFunction = (...args: any[]) => any;
type ThrottleReturnType<T extends TFunction> = (...args: Parameters<T>) => void;

function throttle<T extends TFunction>(
  func: T,
  wait: number
): ThrottleReturnType<T> {
  let latestCall: T | undefined;
  let isBusy = false;

  return function (...args: Parameters<T>) {
    if (!isBusy) {
      func(...args);
      isBusy = true;

      setTimeout(function () {
        if (latestCall) latestCall();

        isBusy = false;
        latestCall = undefined;
      }, wait);
    } else {
      latestCall = func.bind(func, ...args);
    }
  };
}

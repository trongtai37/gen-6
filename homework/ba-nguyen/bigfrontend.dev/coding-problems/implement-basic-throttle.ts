function throttle<T extends (...args: any[]) => any>(func: T, wait: number) {
  let isWait = false;
  let lastArgs;

  return (...args: any) => {
    if (!isWait) {
      isWait = true;
      func(...args);

      setTimeout(() => {
        isWait = false;
        if (lastArgs) {
          func(...lastArgs);
        }
      }, wait);
    } else {
      lastArgs = [...args];
    }
  };
}

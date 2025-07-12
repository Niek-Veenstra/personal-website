export const emptyOnCatch = (func: (...args: any) => any) => {
  return () => {
    try {
      return func();
    } catch (exc) {
      return [];
    }
  };
};

export const emptyOnCatchAsync = (func: (...args: any) => Promise<any>) => {
  return async () => {
    try {
      return await func();
    } catch (exc) {
      return [];
    }
  };
};

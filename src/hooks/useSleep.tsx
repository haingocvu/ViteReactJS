export const useSleep = (timeout: number): Promise<any> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({});
    }, timeout);
  });
};

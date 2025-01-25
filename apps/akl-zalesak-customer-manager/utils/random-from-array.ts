export const randomFromArray = <T>(array: T[]) =>
  array[Math.floor(Math.random() * array.length)];

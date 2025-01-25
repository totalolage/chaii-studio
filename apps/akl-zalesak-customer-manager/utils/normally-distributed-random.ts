export const normallyDistributedRandom = (mean: number, deviation: number) => {
  const u = Math.random();
  const v = Math.random();
  return (
    mean +
    deviation * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
  );
};

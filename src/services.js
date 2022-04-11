export const genKey = () => {
  const rnd = Math.floor(Math.random() * 10000);
  return Date.now() + rnd;
};

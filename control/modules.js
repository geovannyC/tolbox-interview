("use strict");
// lógica de los middelwares
const test = () => {
  return true;
};
const testAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(true)
    }, 1500);
  });
};
module.exports = {
  test,
  testAsync,
};

("use strict");
// lógica de los middelwares
const test = () => {
  return true;
};
const testAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(true)
    }, 200);
  });
};
const investing = (word)=>{
    return new Promise ((resolve, reject)=>{
        if(typeof word === "string"){
            resolve(word.split("").reverse().join(""))
        }else{
            reject(false)
        }
    })
}
const checkPalindromeWord = (word, wordInvested)=>{
    return new Promise ((resolve, reject)=>{
        resolve(word===wordInvested?true:false)
    })
}
module.exports = {
  test,
  testAsync,
  investing,
  checkPalindromeWord
};

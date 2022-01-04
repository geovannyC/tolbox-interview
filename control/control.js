var modules = require("./modules");

("use strict");
// control de los middelware para las solicitudes de la api
const test = (req, res) => {
  res.json("hi api");
  res.status(200);
};
// control de la palabra ingresada
const getWordinvested = async (req, res) => {
  const word = req.query.text;
  if (word) {
    // uso del modulo para invertir la palabra
    const wordInvested = await modules.investing(word);
    // uso de el modulo para revisar si la palabra ingresada es un palíndromo
    const findPalindrome = await modules.checkPalindromeWord(
      wordInvested,
      word
    );
    // revisión del palindromo en caso se derlo enviará la respuesta solucitada en el formulario
    if (!findPalindrome) {
      res.status(200);
      res.json({
        text: wordInvested,
      });
    } else {
      res.status(200);
      res.json({
        palindrome: true,
      });
    }
  } else {
    res.status(400);
    res.json({
      error: "no text",
    });
  }
};
module.exports = {
  test,
  getWordinvested,
};

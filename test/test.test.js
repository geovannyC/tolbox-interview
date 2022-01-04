const chai = require("chai"),
  modules = require("../control/modules"),
  request = require("supertest"),
  app = require("../setup/app");
// testing con chai
describe("test", function () {
  it("test mocha chai", function () {
    chai.assert.equal([1, 2, 3].indexOf(4), -1);
  });
});
// testing de las funciones
describe("test fn", () => {
  it("test mocha chai", () => {
    const expected = true;
    const result = modules.test();
    chai.expect(expected).to.equal(result);
  });
});
// testing de las funciones Asincronicas
describe("test fn Async", () => {
  it("test mocha chai", async () => {
    const expected = true;
    const result = await modules.testAsync();
    console.log(result);
    chai.expect(expected).to.equal(result);
  });
});
//testing lógica del modulo investing
describe("testing of investing module", () => {
  it("Get a word the module should returns the word invested", async () => {
    const expected = "aloh";
    const result = await modules.investing("hola");
    chai.expect(expected).to.equal(result);
  });
});
//testing lógica del modulo checkPalindromeWord
describe("testing of checkPalindromeWord module", () => {
  it("Get two words, if are the same word the module returns false else return true", async () => {
    const expected = true;
    const result = await modules.checkPalindromeWord("ala", "ala");
    console.log(result);
    chai.expect(expected).to.equal(result);
  });
});
//testing con supertest
describe("GET /test", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/test")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
//testing con supertest
//testing peticion con 200
describe("GET /iecho", function () {
  it("responds with word invested and returns 200 if the wors isn't a palindrome, if it is returns 204", function (done) {
    request(app)
      .get("/iecho?text=text")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        } else {
          if (res.body.text === "txet") {
            return done();
          } else {
            return done(err);
          }
        }
      });
  });
});
//testing peticion con 204
describe("GET /iecho", function () {
  it("responds with word invested and returns 204 if the wors a palindrome, if it is returns 204", function (done) {
    request(app)
      .get("/iecho?text=azuza")
      .set("Accept", "application/json")
      .expect(204)
      .end(function (err, res) {
        if (err) {
          return done(err);
        } else {
          if (res.body.palindrome) {
            return done();
          } else {
            return done(err);
          }
        }
      });
  });
});
//testing peticion con 404
describe("GET /iecho", function () {
  it("responds with word invested and returns 404 if the wors isn't a correct query", function (done) {
    request(app)
      .get("/iecho?anytext=text")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(400)
      .end(function (err, res) {
          console.log(res.status)
        if (err) {
          return done(err);
        } else {
          if (res.body.error === "no text") {
            return done();
          } else {
            return done(err);
          }
        }
      });
  });
});

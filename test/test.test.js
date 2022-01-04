const chai = require("chai"),
modules = require("../control/modules"),
request = require('supertest'),
app = require("../setup/app");
// testing con el assert de chai
describe("test", function () {
  it("test mocha chai", function () {
    chai.assert.equal([1, 2, 3].indexOf(4), -1);
  });
});
// testing de las funciones
describe("test fn", () => {
  it("test mocha chai", () => {
      const expected = true
      const result = modules.test()
    chai.expect(expected).to.equal(result)
  });
});
// testing de las funciones Asincronicas
describe("test fn Async", () => {
  it("test mocha chai", async() => {
      const expected = true
      const result = await modules.testAsync()
      console.log(result)
    chai.expect(expected).to.equal(result)
  });
});
//testing con supertest
describe('GET /test', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/test')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

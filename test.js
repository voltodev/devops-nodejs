const supertest = require("supertest");

let server = supertest.agent("http://locahost:5000");

describe("Teste" , () => {
  it("should" , (done) => {
    server
      .get("/")
      .expect("Content-type", '/text/')
      .expect(200)
      .end((err,res) => {
        done();
      })
  })
})
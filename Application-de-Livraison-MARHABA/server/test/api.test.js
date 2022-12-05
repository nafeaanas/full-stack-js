const request = require('supertest') ;
const app = require('../server') 

describe("POST /api/auth/login", () => {
    it("should be provide an email and password after login", async () => {
      const res = await request(app).post("/api/auth/login").send({
        email: 'abdeobettal@gmail.com' ,
      });
      expect(res.statusCode).toBe(400);
    });
    // it("should be login seccufuly", async () => {
    //   const res = await request(app).post("/api/auth/login").send({
    //     // name: "abdessamad",
    //     email: "" ,
    //     password: ""
    //   });
    //   expect(res.statusCode).toBe(200);
    // });
    // it("should be not login because not verified", async () => {
    //   const res = await request(app).post("/api/auth/login").send({
    //     email: "2"+ email ,
    //     password: "2"+ password,
    //   });
    //   expect(res.statusCode).toBe(401);
    // });
    // it("should be not login because data not valid", async () => {
    //   const res = await request(app).post("/api/auth/login").send({
    //     email: "test"+ email ,
    //     password: "test"+ password,
    //   });
    //   expect(res.statusCode).toBe(402);
    // });
  });
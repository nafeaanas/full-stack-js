const request = require('supertest') ;
const app = require('../server') 

describe("POST /api/auth/login", () => {
    it("should be provide an email and password after login", async () => {
      const res = await request(app).post("/api/auth/login").send({
        email: 'nafeaanass15@gmail.com' ,
      });
      expect(res.statusCode).toBe(400);
    });
    it("should be login seccufuly", async () => {
      const res = await request(app).post("/api/auth/login").send({
        email: "nafeaanass15@gmail.com" ,
        password: "chemaia1"
      });
      expect(res.statusCode).toBe(200);
    });
    it("should be not login because not verified", async () => {
      const res = await request(app).post("/api/auth/login").send({
        email: "nafeaanass20@gmail.com",
        password: "123",
      });
      expect(res.statusCode).toBe(401);
    });
    it("should be not login because data not valid", async () => {
      const res = await request(app).post("/api/auth/login").send({
        email: "nafeaanass15@gmail.com",
        password: "123",
      });
      expect(res.statusCode).toBe(402);
    });
  });
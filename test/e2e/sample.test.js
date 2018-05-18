const { describe, it, expect, request } = require("../utils");

describe("GET /examples", () => {
  it("returns 200", async () => {
    const { statusCode } = await request.get("/examples");
    expect(statusCode).to.equal(200);
  });

  it("returns Hello World", async () => {
    const { body } = await request.get("/examples");
    expect(body).to.deep.equal({ message: "Hello World" });
  });
});

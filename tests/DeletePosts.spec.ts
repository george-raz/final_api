import { Http2ServerRequest } from "http2";
import superagent from "superagent"
import { HttpClient } from "../custom_methods/http.client";

describe("DELETE requests suite", function () {
  it("Check response status code", async () => {
    const response = await HttpClient.delete("posts", 1)
    expect(response.status).toBe(200)
  })

  it("Check response body", async () => {
    const expected = {};
    const response = await HttpClient.delete("posts", 1)
    expect(response.body).toMatchObject(expected)
  })

  it("Check response headers", async () => {
    const expected = "application/json; charset=utf-8";
    const response = await HttpClient.delete("posts", 1)
    expect(response.headers['content-type']).toBe(expected)
  })

  it("Check deleting the same post twice", async () => {
    const response = await HttpClient.delete("posts", 1)
    expect(response.status).toBe(400)
  })
  
  it("Check deleting non-existing post", async () => {
    const response = await HttpClient.delete("posts", 101)
    expect(response.status).toBe(404)
  })
})
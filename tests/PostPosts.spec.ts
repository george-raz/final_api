import superagent from "superagent"
import { HttpClient } from "../custom_methods/http.client"

describe("POST requests suite", function () {
  it("Check response status code", async () => {
    const response = await HttpClient.post("posts", {
      Title: "Joka & Boka: Legendary duo is coming back!",
      Body: "Back in a days when..."
    }
    )
    expect(response.status).toBe(201)
  })

  it("Check response body", async () => {
    const expected = {
      Title: "Joka & Boka: Legendary duo is coming back!",
      Body: "Back in a days when...",
      id: 101
    };
    const response = await HttpClient.post("posts", {
      Title: "Joka & Boka: Legendary duo is coming back!",
      Body: "Back in a days when..."
    }
    )
    expect(response.body).toMatchObject(expected)
  })

  it("Check response headers", async () => {
    const expected = "application/json; charset=utf-8";
    const response = await HttpClient.post("posts", {
      Title: "Joka & Boka: Legendary duo is coming back!",
      Body: "Back in a days when..."
    },
      "Content-Type", "applocation/json"
    )
    expect(response.headers['content-type']).toBe(expected)
  })

  it("Check that 'body' input is nullable", async () => {
    const expected = {
      Title: "Joka & Boka: Legendary duo is coming back!",
      Body: null,
      id: 101
    };
    const response = await HttpClient.post("posts", {
      Title: "Joka & Boka: Legendary duo is coming back!",
      Body: null
    }
    )
    expect(response.body).toMatchObject(expected)
  })
  
  it("Check empty post creation", async () => {
    const expected = {
      id: 101
    };
    const response = await HttpClient.post("posts", {})
    expect(response.body).toMatchObject(expected)
  })
})
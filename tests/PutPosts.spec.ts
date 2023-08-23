import superagent from "superagent"
import { HttpClient } from "../custom_methods/http.client"

describe("PUT requests suite", function () {
  it("Check response status code", async () => {
    const response = await HttpClient.put("posts", 5,{
      Title: "Joka & Boka: Legendary duo is coming back!",
      Body: "Back in a days when..."
      }
    )
    expect(response.status).toBe(200)
  })

  it("Check response body", async () => {
    const expected = {
      "Title": "Joka & Boka: Legendary duo is coming back!",
      "Body": "Back in a days when...",
      "id": 1
    };
    const response = await HttpClient.put("posts", 1,{
      Title: "Joka & Boka: Legendary duo is coming back!",
      Body: "Back in a days when..."
      }
    )
    expect(response.body).toMatchObject(expected)
  })

  it("Check response headers", async () => {
    const expected = "application/json; charset=utf-8";
    
    const response = await HttpClient.put("posts", 5,{
      Title: "Joka & Boka: Legendary duo is coming back!",
      Body: "Back in a days when..."
    },
      "Content-Type", "applocation/json"
    )
    expect(response.headers['content-type']).toBe(expected)
  })

  it("Check that 'body' input is nullable", async () => {
    const expected = {
      "Title": "Joka & Boka: Legendary duo is coming back!",
      "Body": null,
      "id": 1
    };
    const response = await HttpClient.put("posts", 1,{
      Title: "Joka & Boka: Legendary duo is coming back!",
      Body: null
      }
    )
    expect(response.body).toMatchObject(expected)
  })
  
  it("Check post updating to empty", async () => {
    const expected = {
      "id": 1
    };
    const response = await HttpClient.put("posts", 1, {})
    expect(response.body).toMatchObject(expected)
  })  
})

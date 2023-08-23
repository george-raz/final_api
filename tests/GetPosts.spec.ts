import superagent from "superagent"
import { HttpClient } from "../custom_methods/http.client";

describe("GET requests suite", function () {
  it("GET posts response status code", async () => {
    const response = await HttpClient.get("posts");
    expect(response.status).toBe(200)
  })
  
  it("GET posts amount", async () => {
    const expected = 100;
    const response = await HttpClient.get("posts");
    const amount = response.body.length;
    expect(amount).toBe(expected);
  })

  it("GET post by ID", async () => {
    const expected = {
      "userId": 5,
      "id": 50,
      "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
      "body": "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
    }
    const response = await HttpClient.get("posts", {id: 50});
    expect(response.body[0]).toMatchObject(expected)
  })

  it("GET post by ID and UserId", async () => {
    const expected = {
      "userId": 5,
      "id": 50,
      "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
      "body": "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
    }
    const response = await HttpClient.get("posts", {id: 50, userId: 5});
    expect(response.body[0]).toMatchObject(expected)
  })

  it("Check that empty response body is returned if one of the parameters doesn't match with post", async () => {
    const expected: Object[] = [];
    const response = await HttpClient.get("posts", {id: 50, userId: 4});
    expect(response.body).toMatchObject(expected)
  })
})
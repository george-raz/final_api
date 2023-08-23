import superagent from "superagent"

export class HttpClient {
    static readonly url = 'https://jsonplaceholder.typicode.com';

    static async get(path: string, queryValue?: string | object): Promise<any> {
        let response: unknown;
        try {
            if (queryValue) {
                response = await superagent.get(`${HttpClient.url}/${path}`).query(queryValue);
            }
            else {
                response = await superagent.get(`${HttpClient.url}/${path}`);
            }
        }
        catch (err: any) {
            throw new Error(err.message);
        }
        finally {
            return response;
        }
    }

    static async delete(path: string, id: string | number): Promise<any> {
        let response: unknown;
        try {
            response = await superagent.delete(`${HttpClient.url}/${path}/${id}`);
        }

        catch (err: any) {
            throw new Error(err.message);
        }
        finally {
            return response;
        }
    }

    static async post(path: string, body: Object, setField?: string, setValue?: string): Promise<any> {
        let response: unknown;
        try {
            response = await superagent
                .post(`${HttpClient.url}/${path}`)
                .send(
                    body
                )
                .set(`${setField}`, `${setValue}`);
        } catch (err: any) {
            throw new Error(err.message);
        }
        finally {
            return response;
        }
    }
    static async put(path: string, id: string | number, body: Object, setField?: string, setValue?: string): Promise<any> {
        let response: unknown;
        try {
            response = await superagent
                .put(`${HttpClient.url}/${path}/${id}`)
                .send(
                    body
                )
                .set(`${setField}`, `${setValue}`);
        } catch (err: any) {
            throw new Error(err.message);
        }
        finally {
            return response;
        }
    }
}

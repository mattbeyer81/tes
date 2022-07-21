import * as request from "supertest";
import { app } from "../server/app";

it('app works', async () => {
    const response = await request(app).get("/countries");
    const body = response.body;

    expect(body.message).toBe('countries data should go here');

})
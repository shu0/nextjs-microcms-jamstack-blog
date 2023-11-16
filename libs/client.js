import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "eb08iecwvz",
    apiKey: process.env.API_KEY,
});


import * as dotenv from 'dotenv';
dotenv.config();

export const user = process.env.DB_USER;
export const pass = process.env.DB_PASSWORD;
export const db = process.env.DB_NAME;
export const secret = process.env.JWS_SECRET;

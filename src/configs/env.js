import { config } from "dotenv";

config();

const env = {
    APPLICATION_PORT: process.env.APPLICATION_PORT,
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,
}

export default env;
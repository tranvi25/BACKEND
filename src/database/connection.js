import mongoose from "mongoose";

import env from "../configs/env.js";

mongoose.connect(env.MONGODB_CONNECTION_STRING);

export const connection = mongoose;
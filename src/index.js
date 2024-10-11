import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import env from './configs/env.js';  // Ensure env.js has the correct APPLICATION_PORT
import user from './routes/user.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/user', user);

app.listen(env.APPLICATION_PORT, () => {
    console.log(`Application running on port ${env.APPLICATION_PORT}`);
});

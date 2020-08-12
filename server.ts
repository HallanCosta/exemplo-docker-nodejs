import express from 'express';

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.listen(PORT, () => console.log('App listining on port 3333 >'));
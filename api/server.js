const express = require('express');
const app = express();

console.log(app);

app.get('/node', (res, req) => {
    console.log(res);
});

app.listen(8080);
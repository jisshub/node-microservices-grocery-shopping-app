const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({
        "msg": "Shopping Service"
    });
});

app.listen(8003, () => {
  console.log(`App runs on port ${8003}`);
});

# Building grocery shopping microservices App 

- Classify the app into 3 services:

1. Products
2. Customer
3. Shopping

- Create 3 different directories for each services. Install the below in all 3 folders each.

```bash
npm init
npm i nodemon -D
npm i dotenv express cors
```

- Create **index.js** files on each directory.

**index.js**

```js
const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({
        "msg": "Hello world"
    });
});

app.listen(8001, () => {
  console.log(`App runs on port ${8001}`);
});
```

- Update the **package.json** file for each services/directories.

```js
"scripts": {
    "start": "nodemon index.js"
  }
```

time: 24: 50

url: https://www.youtube.com/watch?v=EXDkgjU8DDU&list=PLaLqLOj2bk9ZV2RhqXzABUP5QSg42uJEs&index=2


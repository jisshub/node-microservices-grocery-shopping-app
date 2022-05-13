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

## Create gateway directory 

- Install Libraries

```bash
npm init
npm i cors express dotenv
npm i nodemon -D
npm i express-http-proxy
```

- Update **index.js**

**gateway/index.js**

```js
const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy'); 

const app = express();

app.use(cors);
app.use(express.json());

app.listen(8000, () => {
  console.log(`App runs on port ${8001}`);
});
```

- Update **package.json**

**gateway/package.json**

```json
"scripts": {
  "start": "nodemon index.js"
}
```

### Use of Proxy

```js
const proxy = require('express-http-proxy'); 
```

Proxy will redirect the request that  is coming to the gateway to the endpoints of our services(customer, products, shopping).

**Example:**

If request is coming to the **customer service**, proxy will redirect the request to *endpoints* of customer service.

- Update **index.js** with proxy

```javascript
app.use('/customer', proxy('http://localhost:8001'));
app.use('/shopping', proxy('http://localhost:8002'));
app.use('/', proxy('http://localhost:8003'))
```

If request comes to **customer** endpoint, proxy redirect request to **localhost:8001** where our customer service is running.

If request comes to **shopping** endpoint, proxy redirect request to **localhost:8003** where our shopping service is running..

if request comes to **root** endpoint, proxy redirect request to **localhost:8003** where our product service is running.




time: 24: 50

url: https://www.youtube.com/watch?v=EXDkgjU8DDU&list=PLaLqLOj2bk9ZV2RhqXzABUP5QSg42uJEs&index=2


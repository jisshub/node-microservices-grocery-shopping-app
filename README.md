# Building grocery shopping microservices App 


Youtube Playlist: https://www.youtube.com/playlist?list=PLaLqLOj2bk9ZV2RhqXzABUP5QSg42uJEs


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


- Create one dev and env file for each service.

**customer/.env**

```env
APP_SECRET ='jg_youtube_tutorial'

# Mongo DB
MONGODB_URI='mongodb://localhost:27017/shopping_app_customer'

# Port
PORT=8000
```

**customer/.env.dev**

```dev
APP_SECRET ='jg_youtube_tutorial'

# Mongo DB
MONGODB_URI='mongodb://localhost:27017/shopping_app_customer'

# Port
PORT=8000
```

- Similary add this .env and .env.dev file for each services.

- Update **package.json** for each service.

- Update the *scripts* and *dependencies* for each service.

```json
 "scripts": {
    "start": "NODE_ENV=prod nodemon src/index.js",
    "dev": "NODE_ENV=dev nodemon src/index.js"
  }
  "dependencies": {
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.3.3",
    "uuid": "^8.3.2",
    "winston": "^3.7.2"
  }
```


- Finally run the command under each directory.

```bash
npm i
```

- Then run the dev server in each service.

```bash
npm run dev
```

time: 00: 00

url: https://www.youtube.com/watch?v=-reuug_7iG0&list=PLaLqLOj2bk9ZV2RhqXzABUP5QSg42uJEs&index=2



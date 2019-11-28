const dotenv = require('dotenv');

// Set default to "development"
const nodeEnv = process.env.NODE_ENV || 'development';

// Load .local first beacause dotenv doesn't override env already set
const resEnvLocal = dotenv.config({
    path: `./env/.env.local`,
});

// load .env with NODE_ENV setted
const resEnv = dotenv.config({
    path: `./env/${nodeEnv}.env`,
});

// const resEnvDefault = dotenv.config({
//     path: `./env/.env`,
// });


if (resEnv.error) {
    throw result2.error;
}

require('dotenv').config();

module.exports = {
    development: {
        "username": process.env.DEV_DB_USERNAME, // postgres  DEV_DB_USERNAME
        "password": process.env.DEV_DB_PASSWORD,
        "database": process.env.DEV_DB_NAME,
        "host": process.env.DEV_DB_HOST,
        "dialect": "postgres"
      },
      production: {
        use_env_variable: 'PROD_URL', // postgres  DEV_DB_USERNAME
        "password": process.env.DEV_DB_PASSWORD,
        "database": process.env.DEV_DB_NAME,
        "host": process.env.DEV_DB_HOST,
        "dialect": "postgres"
      },
}
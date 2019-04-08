module.exports = {
    // host: "us-cdbr-iron-east-03.cleardb.net",
    // user: "b0d4acaa6bdbbc",
    // password: "08f85c87",
    // dbName: "heroku_7b24a25928ac47a"
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME
};

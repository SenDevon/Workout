module.exports = {
    HOST: "localhost",
    USER: "dev",
    PASSWORD: "devPass",
    DB: "loader",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
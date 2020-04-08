const { Sequelize } = require('sequelize');
const AccountModel = require('./Account');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

const Account = AccountModel(sequelize, Sequelize);

module.exports = {
  Account,
}

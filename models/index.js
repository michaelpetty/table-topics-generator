const { Sequelize, DataTypes } = require('sequelize');
const AccountModel = require('./Account');
const ProfileModel = require('./Profile');
const QuestionModel = require('./Question');
const TopicModel = require('./Topic');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

const Account = AccountModel(sequelize, DataTypes);
const Profile = ProfileModel(sequelize, DataTypes);
const Question = QuestionModel(sequelize, DataTypes);
const Topic = TopicModel(sequelize, DataTypes);

module.exports = {
  Account,
  Profile,
  Question,
  Topic
}

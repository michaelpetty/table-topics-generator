module.exports = (sequelize, type) => {
  return sequelize.define('account', {
    email: {
      type: type.STRING,
      allowNull: false,
    }
  })
}

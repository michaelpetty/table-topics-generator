module.exports = (sequelize, types) => {
  sequelize.define('topic', {
    name: {
      type: types.STRING(40),
      allowNull: false
    }
  })
}

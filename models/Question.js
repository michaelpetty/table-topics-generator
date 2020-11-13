module.exports = (sequelize, types) => {
  return sequelize.define('question', {
    content: {
      type: types.STRING(255),
      allowNull: false
    }
  })
}

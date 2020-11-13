module.exports = (sequelize, types) => {
  return sequelize.define('profile', {
    name: types.STRING(40),
    bio: types.TEXT,
  })
}

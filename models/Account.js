module.exports = (sequelize, types) => {
  return sequelize.define('account', {
    email: {
      type: types.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [3,40]
      }
    },
    password: {
      type: types.STRING,
      allowNull: false
    }
  })
}

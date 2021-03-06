const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        try {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      } catch (err) {
        res.status(500).json(err.message);
      }
      },
      beforeUpdate: async (updatedUserData) => {
        try {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;

      } catch (err) {
        res.status(500).json(err.message);
      }
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
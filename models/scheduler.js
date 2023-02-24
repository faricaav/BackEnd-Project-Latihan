'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scheduler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  scheduler.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    waktu_sekarang: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'scheduler',
    tableName: 'scheduler'
  });
  return scheduler;
};
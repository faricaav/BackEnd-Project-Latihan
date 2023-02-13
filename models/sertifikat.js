'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sertifikat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.siswa,{
        foreignKey: "nis",
        as: "siswa"
      })
    }
  }
  sertifikat.init({
    id_sertifikat:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nis: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    judul: DataTypes.STRING,
    lomba: DataTypes.STRING,
    cover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sertifikat',
    tableName: 'sertifikat',
  });
  return sertifikat;
};
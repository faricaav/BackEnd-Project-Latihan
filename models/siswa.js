'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.sertifikat,{
        foreignKey: "nis",
        as: "sertifikat nis"
      })
    }
  }
  siswa.init({
    nis: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    sertifikat: DataTypes.ENUM("true","false")
  }, {
    sequelize,
    modelName: 'siswa',
    tableName: 'siswa',
  });
  return siswa;
};
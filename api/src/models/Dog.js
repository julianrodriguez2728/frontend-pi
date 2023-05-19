const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Dog", {
    id:{
      type:DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nombre: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull:false
    },
    altura:{
      type: DataTypes.STRING,
      allowNull: false
    },
    peso:{
      type: DataTypes.STRING,
      allowNull: false
    },
    years:{
      type:DataTypes.INTEGER
    },
    temperamento:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  },{
    timestamps: false
  });
};

module.exports = function(sequelize, DataTypes) {
  var Avatar = sequelize.define("Avatar", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hobby: {
      type: DataTypes.TEXT,
      allowNull: false, 
    },
    imagePath: {
      type: DataTypes.STRING, 
    }
  });
  return Avatar;
};
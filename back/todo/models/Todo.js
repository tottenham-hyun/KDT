const Todo = function (Sequelize, DataTypes) {

    const model = Sequelize.define(
      "Todo", 
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          authIncrement: true,
        },
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        done: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      }, 
      {
        tableName: "todo", 
        freezeTableName: true, 
        timestamps: false, 
      } 
    );
  
    return model;
  };
  
  module.exports = Todo;
  
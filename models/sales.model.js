module.exports = (sequelize, Sequelize) => {
    const Sales = sequelize.define("sales", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.INTEGER
      }
    });
  
    return Sales;
  };
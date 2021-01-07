const {sequelize }= require ('sequelize');
const db = new Sequelize('newnode','root', '', {
    host: 'localhost',
    dialect:'mysql2',
  });
   module.exports=sequelize;    

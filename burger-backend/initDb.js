const {sequelize} = require('./models/index.model');
const initializeDatabase = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({alter:true}); 
        process.exit(0);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

initializeDatabase();
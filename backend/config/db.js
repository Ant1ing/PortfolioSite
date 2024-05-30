import mysql from 'mysql2/promise';

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: '141.136.33.1',
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: 'u236269858_portfolio'
        });

        console.log('Successfully connected to MySQL');
        return connection;
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
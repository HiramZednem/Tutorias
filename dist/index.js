const express = require('express');
const app = express();
const tutorRoutes = require('./infrastructure/routes/tutorRoutes');
const TutorRepository = require('./domain/repositories/tutorRepository');
const connection = require('./config/dbConfig');

app.use(express.json());

const dependencies = {
    tutorRepository: new TutorRepository()
};

app.use('/api', tutorRoutes(dependencies));

const PORT = process.env.PORT || 3000;

connection.getConnection().getConnection((err) => {
    if (err) {
        console.error('Unable to connect to the database:', err);
        process.exit(1);
    } else {
        console.log('Connected to the database.');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
});

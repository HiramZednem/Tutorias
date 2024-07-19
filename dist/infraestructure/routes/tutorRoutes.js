const express = require('express');
const router = express.Router();
const tutorController = require('./controllers/tutorController');

module.exports = (dependencies) => {
  const controller = tutorController(dependencies);

  router.post('/tutors', controller.create);
  router.get('/tutors', controller.list);

  // Rutas para update y delete

  return router;
};
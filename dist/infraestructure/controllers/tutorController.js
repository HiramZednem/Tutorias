const createTutor = require('../../application/use_cases/createTutor');
const getTutors = require('../../application/use_cases/getTutors');

module.exports = (dependencies) => {
  const { tutorRepository } = dependencies;

  return {
    create: async (req, res) => {
      const tutor = await createTutor({ tutorRepository })(req.body);
      res.status(201).json(tutor);
    },

    list: async (req, res) => {
      const tutors = await getTutors({ tutorRepository })();
      res.status(200).json(tutors);
    },

    // Implementar update y delete
  };
};
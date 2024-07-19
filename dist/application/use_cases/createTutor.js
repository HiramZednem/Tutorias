module.exports = ({ tutorRepository }) => {
    return async (tutorData) => {
      const tutor = new Tutor(tutorData);
      return await tutorRepository.create(tutor);
    };
};
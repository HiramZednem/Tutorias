module.exports = ({ tutorRepository }) => {
    return async () => {
      return await tutorRepository.findAll();
    };
};
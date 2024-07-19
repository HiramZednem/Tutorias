const TutorModel = require('../../infrastructure/database/models/tutorModel');

class TutorRepository {
    async create(tutor) {
        return await TutorModel.create(tutor);
    }

    async findById(id) {
        return await TutorModel.findById(id);
    }

    async findAll() {
        return await TutorModel.findAll();
    }

    async update(tutor) {
        return await TutorModel.update(tutor);
    }

    async delete(id) {
        return await TutorModel.delete(id);
    }
}

module.exports = TutorRepository;

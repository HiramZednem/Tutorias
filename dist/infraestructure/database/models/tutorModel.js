const connection = require('../../config/dbConfig');

class TutorModel {
    static async create(tutor) {
        const [rows] = await connection.getConnection().query(
            'INSERT INTO tutors (name, subject) VALUES (?, ?)',
            [tutor.name, tutor.subject]
        );
        return { id: rows.insertId, ...tutor };
    }

    static async findById(id) {
        const [rows] = await connection.getConnection().query(
            'SELECT * FROM tutors WHERE id = ?',
            [id]
        );
        return rows[0];
    }

    static async findAll() {
        const [rows] = await connection.getConnection().query('SELECT * FROM tutors');
        return rows;
    }

    static async update(tutor) {
        await connection.getConnection().query(
            'UPDATE tutors SET name = ?, subject = ? WHERE id = ?',
            [tutor.name, tutor.subject, tutor.id]
        );
        return tutor;
    }

    static async delete(id) {
        await connection.getConnection().query(
            'DELETE FROM tutors WHERE id = ?',
            [id]
        );
    }
}

module.exports = TutorModel;

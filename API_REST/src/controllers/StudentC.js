import Aluno from '../models/Aluno';
import File from '../models/File';

const studentsAtt = [
  'id',
  'nome',
  'sobrenome',
  'email',
  'idade',
  'peso',
  'altura',
];
const tOrder = [['id', 'DESC'], [File, 'id', 'DESC']];

const includes = { model: File, attributes: ['id', 'filename', 'url'] };

class StudentController {
  async index(req, res) {
    try {
      const student = await Aluno.findAll({
        attributes: studentsAtt,
        order: tOrder,
        include: includes,
      });
      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const student = await Aluno.create(req.body);
      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID.'],
        });
      }

      const student = await Aluno.findByPk(id, {
        attributes: studentsAtt,
        order: tOrder,
        include: includes,
      });

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists.'],
        });
      }

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID.'],
        });
      }

      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists.'],
        });
      }

      return await student.update(req.body);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID.'],
        });
      }

      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists.'],
        });
      }

      await student.destroy();
      return res.json({ Success: 'User successfully deleted' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new StudentController();

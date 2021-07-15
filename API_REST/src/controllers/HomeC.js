import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const newStudent = await Aluno.create(req.body);
      return res.json(newStudent);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new HomeController();

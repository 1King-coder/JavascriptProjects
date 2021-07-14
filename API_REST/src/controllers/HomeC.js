import Aluno from '../models/Aluno';

class HomeController {
  async index(request, response) {
    try {
        const newAluno = await Aluno.create(request.body);
        response.json(newAluno);
    } catch (e) {
        response.json(null)
    }
  }
}

export default new HomeController();

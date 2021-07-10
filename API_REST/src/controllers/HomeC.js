import Aluno from '../models/Aluno';

class HomeController {
  async index(request, response) {
    const newAluno = await Aluno.create({
      nome: 'Vitor',
      sobrenome: 'dos Santos Barcelos',
      email: 'vitor@dsb.com',
      idade: 128,
      peso: 90,
      altura: 3.7,
    });

    response.json(newAluno);
  }
}

export default new HomeController();

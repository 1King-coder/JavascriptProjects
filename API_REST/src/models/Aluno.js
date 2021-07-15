import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Field "nome" must have between 3 and 255 characteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Field "sobrenome" must have between 3 and 255 characteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail already used.',
        },
        validate: {
          isEmail: {
            msg: 'Invalid E-mail.',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade must be an integer number.',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Peso must be a integer or float number.',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Altura must be a integer or float number.',
          },
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.hasMany(models.File, { foreignKey: 'student_id' });
  }
}

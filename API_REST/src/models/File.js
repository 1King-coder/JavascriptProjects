import Sequelize, { Model } from 'sequelize';
import Aluno from './Student';

export default class File extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Field "originalname" can not be empty.',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Field "filename" can not be empty.',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'files',
    });
    return this;
  }

  static associate() {
    this.belongsTo(Aluno, { foreignKey: 'student_id' });
  }
}

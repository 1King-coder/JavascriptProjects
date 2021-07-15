const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'viteste',
        email: 'false@gmail.teste',
        password_hash: await bcryptjs.hash('123', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'viteste 2',
        email: 'false2@gmail.teste',
        password_hash: await bcryptjs.hash('1234', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async () => {
  },
};

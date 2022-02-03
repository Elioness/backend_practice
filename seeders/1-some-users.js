"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "jane@doe.com",
          password: "janejane",
          name: "Jane Doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "john@doe.com",
          password: "johnjohn",
          name: "John Doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};

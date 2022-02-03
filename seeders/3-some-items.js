"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Buy gift for grandma",
          deadline: "20 June 2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Graduate from Codaisseur",
          deadline: "March 2022",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Go surfing in Donostia",
          deadline: "ASAP",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};

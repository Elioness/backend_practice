"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          listName: "Work List",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Hobbies List",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listName: "Personal List",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Airports', 
      [
        {
        name: "Kemopegowda International Airport",
        cityId:11,
        createdAt: new Date(),
        updatedAt:new Date()
        },
        {
          name: "Indira Gandhi International Airport",
          cityId:5,
          createdAt: new Date(),
          updatedAt:new Date()
        },
        {
          name: "Mysore Airport",
          cityId:11,
          createdAt: new Date(),
          updatedAt:new Date()
        },
        {
          name: "Mengaluru International Airport",
          cityId:11,
          createdAt: new Date(),
          updatedAt:new Date()
        }
      ],
    {});
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

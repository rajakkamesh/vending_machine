module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      sku: 'SNIBAR',
      name: 'Snickers - Peanut filled Chocolate',
      short_description: 'Contains crunchy peanuts along with soft nougat and caramel',
      description: 'Contains crunchy peanuts along with soft nougat and caramel, Make every moment extra special with this delicious chocolate.',
      tags: 'chocolatey,snickers,bar',
      image: 'http://placehold.jp/3d4070/ffffff/150x150.png?text=Placeholder%20Product%20Image',
      stock: 20,
      price: '4.30',
      created_at: new Date()
    },
    {
      sku: 'CLIBAR',
      name: 'CLIF BARS - Energy Bars',
      short_description: 'CLIF BAR is The Ultimate Energy Bar',
      description: 'CLIF BAR is The Ultimate Energy Bar, purposefully crafted with an ideal mix of protein, fat, and carbohydrates to sustain active bodies.',
      tags: 'White Chocolate,Macadamia Nut,Crunchy Peanut Butter,Chocolate Chips,Blueberry Crisp',
      image: 'http://placehold.jp/3d4070/ffffff/150x150.png?text=Placeholder%20Product%20Image',
      stock: 16,
      price: '6.20',
      created_at: new Date()
    }], {});
  },  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
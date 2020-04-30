require('dotenv').config();
const db = require('./models');

const usersData = [
  {
    email: 'a@a.com',
    password: '1234',
    name: 'Anna Kendrick',
    bio: 'Actress, Singer, Thinker'
  },
  {
    email: 'b@b.com',
    password: '1234',
    name: 'Mr. Bojangles',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  },
  {
    email: 'c@c.com',
    password: '1234',
    name: 'Catherine O\'Hara',
    bio: 'Bombastic Pundit, Vociferous, Chanteuse. If airplane safety videos have taught me anything, David, it\’s that a mother puts her own mask on first. This place is almost charming. Very rustic cottage… I was half expecting early Unabomber. \'I was served by an intimidating woman at the front desk, with an unrecognizable accent, and scary-looking attire.\’ And what might this have to do with me?'

  },
  {
    email: 'd@d.com',
    password: '1234'
  },
]

const seedDatabase = async () => {
  console.log(`#### Seeding the ${process.env.DB_NAME} Database ####`);
  try {
    await db.sequelize.sync({force: true});
    console.log('## database synched ##')

    const accounts = await db.Account.bulkCreate(usersData);
    // console.log(accounts);
    process.exit();
  } catch(err) {
    console.error('#### Seeding FAILED ####');
    console.error(err);
    process.exit();
  }
}

seedDatabase();

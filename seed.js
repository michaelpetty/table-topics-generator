require('dotenv').config();
const db = require('./models');

const questionsData = [
  {
    content: 'Tell me the 3 best things about you.'
  },
  {
    content: 'On a scale of 1-10, how strict are/were your parents?'
  },
  {
    content: 'Who was your worst teacher? Why?'
  },
  {
    content: 'Who was your favorite teacher? Why?'
  },
  {
    content: 'Which would you pick: being world-class attractive, a genius or famous for doing something great?'
  },
  {
    content: 'Who are the 3 greatest living musicians?'
  },
  {
    content: 'If you could change one thing about yourself, what would it be?'
  },
  {
    content: 'What was your favorite toy growing up?'
  },
  {
    content: 'Name 3 celebrities you most admire.'
  },
  {
    content: 'Name a celebrity you think is lame.'
  },
  {
    content: 'What accomplishment are you most proud of?'
  },
  {
    content: 'Which of your friends are you proudest of? Why?'
  },
  {
    content: 'What\'s the most beautiful place you\'ve ever been?'
  },
  {
    content: 'What are your 3 favorite movies?'
  },
  {
    content: 'How would you describe me to your friends?'
  },
  {
    content: 'Which historical figure would you like to be?'
  },
  {
    content: 'What\'s the right age to get married?'
  },
  {
    content: 'Tell me 3 things you remember about kindergarten.'
  },
  {
    content: 'What paper that you\'ve written are you most proud of?'
  },
  {
    content: 'What would you do if you were invisible for a day?'
  },
  {
    content: 'Who would you like to live like for a day?'
  },
  {
    content: 'If you could time travel, where would you go?'
  },
  {
    content: 'If you could live in any TV home, what would it be?'
  },
  {
    content: 'What\'s your favorite ice cream flavor?'
  },
  {
    content: 'Would you rather live for a week in the past or the future?'
  },
  {
    content: 'What\'s your most embarrassing childhood memory?'
  },
  {
    content: 'What\'s your best childhood memory?'
  },
  {
    content: 'What\'s your favorite holiday?'
  },
  {
    content: 'If you could eat only 3 foods for the rest of your life, what would they be?'
  },
  {
    content: 'If you could be a cartoon character for a week, who would you be?'
  },
  {
    content: 'If you could have dinner with anyone from history, who would it be?'
  },
  {
    content: 'What\'s one choice you really regret?'
  },
  {
    content: 'What\'s your favorite childhood book?'
  },
  {
    content: 'What\'s a great book you\'ve read recently?'
  },
  {
    content: 'Do you feel like a leader or a follower?'
  },
  {
    content: 'If you could ask your pet 3 questions, what would they be?'
  },
  {
    content: 'What\'s the most courageous thing you\'ve ever done?'
  },
  {
    content: 'Who would play you in a movie of your life?'
  },
  {
    content: 'If you could be an Olympic athlete, in what sport would you compete?'
  },
  {
    content: 'If you had to live in a different state, what would it be?'
  },
  {
    content: 'What living person, other than family members, do you most admire?'
  },
  {
    content: 'What has been your favorite family vacation?'
  },
  {
    content: 'If you could choose your own nickname, what would it be?'
  },
  {
    content: 'Who is the funniest person you know?'
  },
  {
    content: 'What\'s your favorite thing about one of your grandparents?'
  },
  {
    content: 'Tell the person to your right your favorite thing about them.'
  },
  {
    content: 'Do you ever talk to yourself? When and what do you say?'
  },
  {
    content: 'When you\'re having a bad day, what do you do to make yourself feel better?'
  },
  {
    content: 'Which TV family is most like your own?'
  },
  {
    content: 'What\'s your favorite smell in the whole world?'
  },
  {
    content: 'What do you think is the greatest invention of all time?'
  },
  {
    content: 'Using one word, how would you describe your family?'
  },
  {
    content: 'Would you rather win an Olympic medal, an Academy Award or the Nobel Peace prize?'
  },
  {
    content: 'What\'s your favorite time of day?'
  },
  {
    content: 'What\'s your favorite season?'
  },
  {
    content: 'What\'s the one food you could never bring yourself to eat?'
  },
  {
    content: 'What is the sound you love the most?'
  },
  {
    content: 'What 3 famous people, living or dead, would you want at your fantasy dinner party?'
  },
  {
    content: 'If you could ask the President one question, what would it be?'
  },
  {
    content: 'If you could pick a new first name, what would it be?'
  },
  {
    content: 'If you had to leave earth on a spaceship and take 4 friends with you, who would they be?'
  },
  {
    content: 'What is your favorite movie quote?'
  },
  {
    content: 'What\'s your pet peeve(s)?'
  },
  {
    content: 'Do you sleep with your sheets tucked in or out?'
  },
  {
    content: 'Do you ever count your steps when you walk?'
  },
  {
    content: 'What\'s your favorite kind of sandwich?'
  },
  {
    content: 'What\'s your dream job?'
  },
  {
    content: 'Cake or pie?'
  },
  {
    content: 'Who is the kindest person you know?'
  },
  {
    content: 'What\'s the best part about having siblings?'
  },
  {
    content: 'What is the scariest movie you\'ve ever seen?'
  },
  {
    content: 'If you could travel anywhere in the world, where would it be?'
  },
  {
    content: 'What is your favorite family tradition?'
  },
  {
    content: 'Who\'s your celebrity crush?'
  },
  {
    content: 'What trait do you like the most about yourself?'
  },
  {
    content: 'What are you good at?'
  },
  {
    content: 'What fictional character do you wish you could meet?'
  },
  {
    content: 'If you could be great at one sport which would you choose?'
  },
  {
    content: 'What\'s the first thing you do when you get home from a trip?'
  },
  {
    content: 'Would you rather spend five days exploring Disney or New York City?'
  },
  {
    content: 'Whose parents do/did you wish you had?'
  },
  {
    content: 'If you could shop for free at one store, which one would you choose?'
  },
  {
    content: 'What personal trait has gotten you in the most trouble?'
  },
  {
    content: 'Which celebrity chef would you most like to fix you a meal?'
  },
  {
    content: 'Who is your favorite athlete?'
  },
  {
    content: 'What is the best piece of advice you\'ve received?'
  },
  {
    content: 'If you had to pick a new name for yourself, what name would you pick?'
  },
  {
    content: 'Would you rather be the most popular kid in school or the smartest kid in school?'
  },
  {
    content: 'What do you like to do on a rainy day?'
  },
  {
    content: 'Would you rather be the best player on a horrible team or the worst player on a great team?'
  },
  {
    content: 'What is your favorite thing about the beach?'
  },
  {
    content: 'If you could be anywhere else right now, where would it be?'
  },
  {
    content: 'What is your favorite Disney movie?'
  },
  {
    content: 'Which of the Seven Dwarfs is most like you?'
  },
  {
    content: 'If someone made a movie of your life would it be a drama, a comedy, a romantic-comedy, action film, or science fiction?'
  },
  {
    content: 'Name a product or service you love so much that you\'d happily be that company\'s spokesperson.'
  },
  {
    content: 'If you were guaranteed to be successful in a different profession, what would you want to do?'
  },
  {
    content: 'As a child, what did you wish to become when you grew up?'
  },
  {
    content: 'What\'s the worst thing you did as a kid?'
  },
  {
    content: 'What is the best part of being a part of your family?'
  },
  {
    content: 'What is your favorite day of the week?'
  },
]

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
    accounts.map((account, idx) => {usersData[idx].account_id = account.id});
    const profiles = await db.Profile.bulkCreate(usersData);
    questionsDataProf = questionsData.map(question => {return {...question, profile_id: profiles[Math.floor(Math.random() * profiles.length)].id}})
    const questions = await db.Question.bulkCreate(questionsDataProf);
    process.exit();
  } catch(err) {
    console.error('#### Seeding FAILED ####');
    console.error(err);
    process.exit();
  }
}

seedDatabase();

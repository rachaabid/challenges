const cron = require('node-cron');


cron.schedule('*/2 * * * *', () => {
  console.log('display a message every two minutes');
});

// module.exports = cron;

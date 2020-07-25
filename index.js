const basics = require('./basics/index');
const basicsAgain = require('./basicsAgain/index');

const helpers = {
    ...basics,
    ...basicsAgain
}

console.log(helpers)

module.exports.helpers = helpers;
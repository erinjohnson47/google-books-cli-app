const minimist = require('minimist');
const help = require('./cmds/help');
const version = require('./cmds/version');
const Search = require('./cmds/search');
const list = require('./cmds/list');
const error = require('./utils/error');

module.exports = () => {
  const args = minimist(process.argv.slice(2));

  // if no args specified default to help menu
  let command = args._[0] || 'help';

  // command for version of books
  if (args.version || args.v) {
    command = 'version';
  }

  // command for help menu
  if (args.help || args.h) {
    command = 'help';
  }

  switch (command) {
    case 'search':
      new Search(args);
      break;

    case 'version':
      version(args);
      break;

    case 'help':
      help(args);
      break;

    case 'list':
      list.displayReadingList();
      break;

    default:
      error(`================================
Sorry, "${command}" is not a valid command! You can type 'books help' or '--h' for a list of valid commands.
================================`);
      process.exit();
      break;
  }
};

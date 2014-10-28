require('coffee-script');
require('coffee-script/register');

module.exports = {
  PACKAGE_INFO: require('./lib/package_info'),
  CLI:          require('./lib/cli'),
  LANGUAGES:    require('./lib/languages'),
  DOC_TAGS:     require('./lib/doc_tags'),
  Project:      require('./lib/project'),
  styles:       require('./lib/styles')
};

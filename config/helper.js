Handlebars = require('handlebars');

Handlebars.registerHelper('test',test);

var test = function(input) {
  return input;
}

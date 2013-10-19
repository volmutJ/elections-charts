//require('dependencies/handlebars-runtime-1.0.0');
//require('dependencies/ember-1.0.0');

require('dependencies/compiled/templates');

Elections = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true
});

require('js/router');
require('js/models/*');
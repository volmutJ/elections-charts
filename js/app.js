//require('dependencies/handlebars-runtime-1.0.0');
//require('dependencies/ember-1.0.0');

google.load("visualization", "1", {packages:["corechart"]});

require('dependencies/compiled/templates');


Elections = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,

    rootElement: '#ember-app'
});

Elections.ApplicationAdapter = DS.FixtureAdapter.extend();

require('js/router');
require('js/models/*');
require('js/controllers/*');
require('js/views/*');

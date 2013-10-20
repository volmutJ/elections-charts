Elections.Router.map(function () {
    this.route('parties', {'path': '/'});
    this.route('about');
    this.route('regions');
});

Elections.PartiesRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('party');
    }
});

Elections.RegionsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('region');
    }
});

Elections.LoadingRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('loading', {
//            outlet: 'loading'
//            into: 'application'
        });
    }
});
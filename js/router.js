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
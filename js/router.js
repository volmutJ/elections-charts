Elections.Router.map(function () {
    this.route('parties', {'path': '/'});
});
Elections.PartiesRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('party');
  }
});
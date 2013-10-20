Elections.PartiesController = Ember.ArrayController.extend({

    sortProperties: ['votes_sum'],
    sortAscending: false,

    partiesForChart: function() {

        // property 'arrangedContent' is provided by SortableMixin
        var parties = this.get('arrangedContent');

        parties = parties.filter(function(party) {
            return party.get('isInteresting');
        });

        return parties.map(function(party) {
            return party.get('idAndNameForGoogleChart');
        });

    }.property('@each')

});

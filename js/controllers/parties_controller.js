Elections.PartiesController = Ember.ArrayController.extend({

    partiesForChart: function() {

        return this.content.map(function(party) {
            var result = party.get('idAndNameForGoogleChart');
            return result;
        });

    }.property('@each')

});

Elections.PartiesController = Ember.ArrayController.extend({

    partiesForChart: function() {

        return this.content.map(function(party) {
            var result = party.get('idAndNameForGoogleChart');
            return result;
        });

    }.property('@each')

});

Elections.PartiesView = Ember.View.extend({

    didInsertElement: function() {

        var parties = this.controller.get('partiesForChart');
        console.log(parties)
        var data = google.visualization.arrayToDataTable(
            parties
        );

        var options = {
            is3D: true
            //title: 'Election results'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }

})

Elections.PartiesView = Ember.View.extend({

    didInsertElement: function() {

        var parties = this.controller.get('partiesForChart');
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

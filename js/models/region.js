Elections.Region = DS.Model.extend({

    name: DS.attr(), // ID volebního kraje, začíná od 1
    votes: DS.attr(), // Součet všech platných hlasů v kraji
    mandates: DS.attr(), // Počet mandátů, které se v tomto kraji rozdělují

    regionParties: DS.hasMany('regionParty'),

    isInHouse: function() {
        return this.get('votes_sum_percent') >= 0.05;
    }.property('votes_sum_percent'),

    idAndNameForGoogleChart: function() {
        return [this.get('name'), this.get('votes_sum_percent')];
    }.property('name', 'votes_sum_percent')
});
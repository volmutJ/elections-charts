Elections.Party = DS.Model.extend({

    //id:	DS.attr(), // 1	ID strany, začíná od 1, stejné jako vylosované volební číslo
    name: DS.attr(), //OBČANÉ.CZ	Plný název strany
    abbr: DS.attr(), //Občané	Zkratka strany
    votes_sum: DS.attr(), //13397	Celkový počet hlasů získaných na celostátní úrovni.
    votes_sum_percent: DS.attr(), //0.0026	Celkový počet procent získaných na celostátní úrovni. Zapsaný jako desetinné číslo (54.3% = 0.543)

    isInHouse: function() {
        return this.get('votes_sum_percent') >= 0.05;
    }.property('votes_sum_percent'),

    isInteresting: function() {
        return this.get('votes_sum_percent') >= 0.01;
    }.property('votes_sum_percent'),

    idAndNameForGoogleChart: function() {
        return [this.get('name'), this.get('votes_sum_percent')];
    }.property('name', 'votes_sum_percent')

});
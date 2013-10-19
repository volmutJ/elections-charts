Elections.Party = DS.Model.extend({

    id:	attr(), // 1	ID strany, začíná od 1, stejné jako vylosované volební číslo
    name: attr(), //OBČANÉ.CZ	Plný název strany
    abbr: attr(), //Občané	Zkratka strany
    votesSum: attr(), //13397	Celkový počet hlasů získaných na celostátní úrovni.
    votesSumPercent: attr(), //0.0026	Celkový počet procent získaných na celostátní úrovni. Zapsaný jako desetinné číslo (54.3% = 0.543)

    fullName: function() {
        return this.get('votestSumPercent') >= 0.05;
    }.property('votestSumPercent')
});
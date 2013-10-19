Elections.Party = DS.Model.extend({

    id:	DS.attr(), // 1	ID strany, začíná od 1, stejné jako vylosované volební číslo
    name: DS.attr(), //OBČANÉ.CZ	Plný název strany
    abbr: DS.attr(), //Občané	Zkratka strany
    votesSum: DS.attr(), //13397	Celkový počet hlasů získaných na celostátní úrovni.
    votesSumPercent: DS.attr(), //0.0026	Celkový počet procent získaných na celostátní úrovni. Zapsaný jako desetinné číslo (54.3% = 0.543)

    fullName: function() {
        return this.get('votesSumPercent') >= 0.05;
    }.property('votesSumPercent')
});

Elections.Party.FIXTURES = [
  {
    "id": 1,
    "name": "OBÄŒANÃ‰.CZ",
    "abbr": "ObÄanÃ©",
    "votes_sum": 13397,
    "votes_sum_percent": 0.0026
  },
  {
    "id": 4,
    "name": "VÄ›ci veÅ™ejnÃ©",
    "abbr": "VV",
    "votes_sum": 569127,
    "votes_sum_percent": 0.1088
  },
  {
    "id": 5,
    "name": "KonzervativnÃ­ strana",
    "abbr": "KONS",
    "votes_sum": 4232,
    "votes_sum_percent": 0.0008
  },
  {
    "id": 6,
    "name": "KomunistickÃ¡ strana ÄŒech a Moravy",
    "abbr": "KSÄŒM",
    "votes_sum": 589765,
    "votes_sum_percent": 0.1127
  }
]

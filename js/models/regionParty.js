Elections.RegionParty = DS.Model.extend({

    //id	9	ID strany, začíná od 1, stejné jako vylosované volební číslo

    votes: DS.attr(), // 96706	Celkový počet hlasů pro tuto stranu
    name: DS.attr(), // Česká strana sociálně demokratická	Plný název strany.
    abbr: DS.attr(), // ČSSD Zkratka strany.
    votes_sum: DS.attr(), //1155267	Celkový počet hlasů získaných na celostátní úrovni. Tato hodnota je stejná (a redundantní) napříč všemi kraji, spolu s hodnotami name, abbr a votes_sum_percent.
    votes_sum_percent: DS.attr(), //0.220856	Celkový počet procent získaných na celostátní úrovni. Zapsaný jako desetinné číslo (54.3% = 0.543)
    mandates: DS.attr(), //4	Počet mandátů, který tato strana získala v tomto kraji
    lowestScore: DS.attr(), //24176.5	Skóre v DHondtově metodě, díky kterému strana získala svůj poslední (nejméně stabilní) mandát.
    requiredVotes: DS.attr(), //2052.7499999999964	Pokud je mandát strany v DHondově žebříčku "první mezi poraženými", je v tomto poli počet hlasů, který musí získat, aby předstihla "posledního vítěze".
    requiredScore: DS.attr() // 410.5499999999993	Stejně jako requiredVotes, ale uvažuje se skóre. Pětinásobný počet hlasů je způsoben DHondtovým dělitelem, v tomto případě tedy strana bojuje o svůj 5. mandát.

    // candidates - has many
});
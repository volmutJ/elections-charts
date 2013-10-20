Elections.RegionParty = Elections.Party.extend({

    mandates: DS.attr(), //4	Počet mandátů, který tato strana získala v tomto kraji
    lowestScore: DS.attr(), //24176.5	Skóre v DHondtově metodě, díky kterému strana získala svůj poslední (nejméně stabilní) mandát.
    requiredVotes: DS.attr(), //2052.7499999999964	Pokud je mandát strany v DHondově žebříčku "první mezi poraženými", je v tomto poli počet hlasů, který musí získat, aby předstihla "posledního vítěze".
    requiredScore: DS.attr() // 410.5499999999993	Stejně jako requiredVotes, ale uvažuje se skóre. Pětinásobný počet hlasů je způsoben DHondtovým dělitelem, v tomto případě tedy strana bojuje o svůj 5. mandát.

    // candidates - has many
});
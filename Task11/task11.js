function getStatistic(){
    //Do I need it?
    var ancestry = JSON.parse(ANCESTRY_FILE);
    function average(array){
        function plus(a, b){
            return a + b;
        }
        return array.reduce(plus) / array.length;
    }

    var byCent = {};
    //Object with century-keys and age-values
    ancestry.forEach(function(person){
        var century = Math.ceil(person.died / 100);
        if (!byCent.hasOwnProperty(century)){
            byCent[century] = [];
        }
        byCent[century].push(person.died - person.born);
    });
    //result array with strings
    var result = [];

    for (var key in byCent){
        if (byCent[key] != null){
            result.push(key + ': ' + average(byCent[key]));
        }
    }

    return result;
}

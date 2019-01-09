var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array){
    function plus(a, b){
        return a + b;
    }
    return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person){
    byName[person.name] = person;
});

//ancestry length == 39

var mumExist = ancestry.filter(function(person){
    return byName[person.mother] != null;
});

//mumExist length == 34

var differences = mumExist.map(function(person){
    return person.born - byName[person.mother].born;
});


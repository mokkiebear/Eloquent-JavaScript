function deepEqual(o1, o2){
    //Number values of object1
    var c1 = Object.keys(o1).length;
    //Number values of object2
    var c2 = Object.keys(o2).length;
    //The same object
    if (o1 === o2){
        return true;
    }

    //If types aren't equal
    if (typeof o1 !== typeof o2){
        return false;
    }
    //Different number of values
    if (c1 != c2) {
        return false;
    }

    for (var k in o1){
        if (!(k in o2)){
            return false;
        }
        if (o1[k] !== o2[k]){
            if ((typeof o1[k] === 'object' && typeof o2[k] !== 'object') ||
                    (typeof o2[k] === 'object' && typeof o1[k] !== 'object')){
                return false;
            }
            if (deepEqual(o1[k],o2[k]) === false){
                return false;
            }
        }
        else {
            return true;
        }
    }
}

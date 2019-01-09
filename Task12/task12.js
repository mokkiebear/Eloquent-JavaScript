function every(array, func){
    //Function every
    for (var i = 0; i < array.length; ++i){
        if (func(array[i]) === false){
            return false;
        }
    }
    return true;
}

function some(array, func){
    //Function some
    for (var i = 0; i < array.length; ++i){
        if (func(array[i]) === true){
            return true;
        }
    }
    return false;
}

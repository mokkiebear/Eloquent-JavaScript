function arrayToList(array){
    var list = null;
    //This is a comment
    for (var i = array.length - 1; i >= 0; --i){
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list){
    var array = [];
    for (var i = list; i !== null; i = i.rest){
        array.push(i.value);
        //I use push
    }
    return array;
}

function prepend(elem, list){
    //Here was two lines
    return {value: elem, rest: list};
}

function nth(list, number){
    if (number === 0){
        return list.value;
    }
    else if (list.rest === null){
        return;
    }
    else{
        return nth(list.rest, number - 1);
        //Recursive method
    }
}

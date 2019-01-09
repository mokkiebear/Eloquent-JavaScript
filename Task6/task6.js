function reverseArray(array){
    //This is a comment
    var result = [];
    for (var i = array.length - 1; i >= 0; --i){
        result.push(array[i]);
    }
    return result;
}

function reverseArrayInPlace(array){
    //Number of exchanges
    var count = array.length / 2;
    console.log(count);
    for (var i = 0; i < count; ++i){
        //This exchange
        console.log(i);
        var temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
}

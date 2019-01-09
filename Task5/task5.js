function range(start, end, step){
    if (step === undefined){
        step = 1;
    }
    var array = [];
    //I want to change it
    if (start > end && step < 0){
        while (start >= end){
            array[array.length] = start;
            start += step;
        }
    }
    else if (start < end && step > 0){
        while (start <= end){
            array[array.length] = start;
            start += step;
        }
    }
    else{
        //This is a comment
        return;
        //Such many comments
    }
    return array;
}

function sum(array){
    //It works normalno
    var sum = 0;
    for (var i = 0; i < array.length; ++i){
        sum += array[i];
    }
    return sum;
}

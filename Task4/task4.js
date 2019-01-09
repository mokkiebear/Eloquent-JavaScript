function countBs(str){
    //This function calls another function
    return countChar(str,'B');
}

function countChar(str, ch){
    //This is a comment
    var count = 0;
    for (var i = 0; i < str.length; ++i){
        if(str.charAt(i) === ch){
            count++;
        }
    }
    return count;
}

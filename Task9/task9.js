function flatter(array){
    //Using reduce and concat methods together
    return array.reduce(function(cur, next){
        return cur.concat(next);
    });
}

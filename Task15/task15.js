function logFive(sequance){
    var res = '';
    for (var i = 0; i < 5; ++i){
        var k = sequance.iterate();
        if (k !== undefined){
            res += k + '\n';
        }
    }
    return res;
}

//ArraySeq constructor
function arraySeq(array){
    this.array = array;
    this.index = -1;
}
//One more comment
arraySeq.prototype.iterate = function(){
    this.index++;
    if (this.index < this.array.length){
        return this.array[this.index];
    }
};

//RangeSeq constructor
function rangeSeq(from, to){
    this.from = from;
    this.to = to;
    this.index = -1;
}

rangeSeq.prototype.iterate = function(){
    this.index++;
    if (this.index <= this.to){
        return this.index + this.from;
    }
};

//It works at last
logFive(new arraySeq([1, 2]));
logFive(new rangeSeq(100, 1000));

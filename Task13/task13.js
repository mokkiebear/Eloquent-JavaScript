function vector(x, y) {
    this.x = x;
    this.y = y;
};
//Method plus
vector.prototype.plus = function(vect){
    return new vector(this.x + vect.x, this.y + vect.y);
};

//Method minus
vector.prototype.minus = function(vect){
    return new vector(this.x - vect.x, this.y - vect.y);
};

//Length property
Object.defineProperty(vector.prototype, 'length', {enumerable: false,
    get: function(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});

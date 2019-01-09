function repeat(string, times) {
    var result = '';
    for (var i = 0; i < times; i++){
        result += string;
    }
    return result;
}

//Cell-Constructor
function textCell(text) {
    this.text = text.split('\n');
}

textCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
};

textCell.prototype.minHeight = function() {
    return this.text.length;
};

textCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || '';
      result.push(line + repeat(' ', width - line.length));
    }
    return result;
};

//Above isn't my code
//My constructor
function stretchCell(inner, width, height){
    this.inner = inner;
    this.width = width;
    this.height = height;
}
//minWidth method
stretchCell.prototype.minWidth = function(){
    var minWidth = this.inner.minWidth();
    return (this.width > minWidth) ? this.width : minWidth;
};
//minHeight method
stretchCell.prototype.minHeight = function(){
    var minHeight = this.inner.minHeight();
    return (this.height > minHeight) ? this.height : minHeight;
};
//Draw method
stretchCell.prototype.draw = function(width, height){
    return this.inner.draw(width, height);
};

//Result
var sc = new stretchCell(new textCell('abc'), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));

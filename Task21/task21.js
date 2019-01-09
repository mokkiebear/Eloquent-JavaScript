var month = {};
(function(exports){
    //Months
    var names = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    //Methods
    exports.name = function(number){
        return names[number];
    };
    exports.number = function(name){
        return names.indexOf(name);
    };
})(month);

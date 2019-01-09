function fixedText() {
    var text = "'I'm the cook,' he said, 'it's my job.'";
    return text.replace(/\'/g, function(quote, pos){
        //I don't use a quote arg
        if (text[pos - 1] !== undefined && text[pos + 1] !== undefined){
            if ((/\w/).test(text[pos - 1]) && (/\w/).test(text[pos + 1])){
                //It doesn't change first quote
                return "'";
            }
            else{
                return '"';
            }
        }
        else {
            return '"';
        }
    });
}

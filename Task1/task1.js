function forLoop(){
  var resultString = '';
  //This is a comment
    for (var line = '#'; line.length < 8; line += '#'){
      resultString += (line + '\n');
    }
  return resultString;
}

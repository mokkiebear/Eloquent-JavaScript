var http = require('http');
function requestWith(type){
  var request = http.request({
    hostname: 'localhost',
    port: '8000',
    method: 'GET',
    //Here is different types
    headers: {Accept: type}
  }, function(response){
  //using function
    readStreamAsString(response,function(error, data){
      if (error == null){
        process.stdout.write('\n' + type + '\n' + data);
      }
      else{
        console.log('\n' + type + '\n' + error);
      }
    });
  });
  request.end();
}

//Function from task
function readStreamAsString(stream, callback) {
  var data = '';
  stream.on('data', function(chunk) {
    data += chunk.toString();
  });
  stream.on('end', function() {
    callback(null, data);
  });
  stream.on('error', function(error) {
    callback(error);
  });
}
//Test this script
var types = ['text/html','text/plain','application/json'];
requestWith(types[0]);


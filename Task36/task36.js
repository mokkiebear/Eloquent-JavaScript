var http = require('http');
function requestTo(type){
  var request = http.request({
    hostname: 'eloquentjavascript.net',
    path: '/author',
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
for(var k = 0; k < types.length; k++){
  requestTo(types[k]);
}

var http = require('http'), fs = require('fs');
var methods = Object.create(null);

//MKCOL method
methods.MKCOL = function(path, respond) {
  fs.stat(path, function(error, stats) {
    if (error && error.code === 'ENOENT'){
      //ENOENT means no such file or directory
      fs.mkdir(path, respondErrorOrNothing(respond));
    }else if (error){
      respond(500, error.toString());
    }else if (stats.isDirectory()){
      //Directory already exists
      respond(204);
    }
    else{
      //if it isn't catalog
      respond(400,'Exists a nondirectory file!');
    }
  });
};


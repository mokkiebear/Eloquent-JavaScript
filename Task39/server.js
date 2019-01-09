var http = require('http'), fs = require('fs');

//Walk through directories and subdirectories
var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err){
        return done(err);
    }
    var i = 0;
    function next() {
      i++;
      var file = list[i];
      if (!file){
          return done(null, results);
      }
      file = require('path').resolve(dir,file);
      fs.stat(file, function(err1, stat) {
        if (stat && stat.isDirectory()) {
          results.push(require('path').relative(process.cwd(),file));
          walk(file, function(err2, res) {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(require('path').relative(process.cwd(),file));
          next();
        }
      });
    };
    next();
  });
};

var methods = Object.create(null);
//Methods definitions
//GET method
methods.GET = function(path, respond) {
    fs.stat(path, function(error, stats) {
      if (error && error.code === 'ENOENT'){
        respond(404, 'File not found');
      }else if (error){
        respond(500, error.toString());
      }else if (stats.isDirectory()){
        walk(path, function(err, results) {
          if (err) {
              throw err;
          }
          respond(200, results.join('\n'));
        });
      }else{
          respond(200, fs.createReadStream(path),require('mime').lookup(path));
      }
    });
};
//DELETE method
methods.DELETE = function(path, respond) {
      fs.stat(path, function(error, stats) {
        if (error && error.code === 'ENOENT'){
      respond(204);
        }else if (error){
      respond(500, error.toString());
        }else if (stats.isDirectory()){
            //remove directory
      fs.rmdir(path, respondErrorOrNothing(respond));
        }else{
            //remove file
      fs.unlink(path, respondErrorOrNothing(respond));
        }
  });
};
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
//PUT method
methods.PUT = function(path, respond, request) {
    var outStream = fs.createWriteStream(path);
    outStream.on('error', function(error) {
      respond(500, error.toString());
    });
    outStream.on('finish', function() {
      respond(204);
    });
    request.pipe(outStream);
  };

//Server creating
http.createServer(function(request, response) {
  function respond(code, body, type) {
    if (!type) {
        type = 'text/html';
    }
    response.writeHead(code, {'Content-Type': type});
    if (body && body.pipe){
      body.pipe(response);
    }
    else{
      response.end(body);
    }
  }

  if (request.method in methods){
    try{
      methods[request.method](urlToPath(request.url),respond, request);
    }
    catch(e){
      respond(405, e.message);
    }
  }
  else{
      respond(405, 'Method ' + request.method + ' not allowed.');
  }
}).listen(8000);



function urlToPath(url) {
    //Url checking on ../ AND ..\
  var test = /\.\.[\/ \\]/.test(url);
  //Throw an error if a user try to get access to the parent directories
  if(test){
    throw Error('You don\'t have access!');
  }
  //Relative path
  var pathname = require('url').parse(url).pathname;
  //Absolute path
  var path = require('path').resolve(decodeURIComponent(pathname).slice(1));
  return path;
}

function respondErrorOrNothing(respond) {
  return function(error) {
    if (error){
      respond(500, error.toString());
    }
    else{
      respond(204);
    }
  };
}



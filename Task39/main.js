
var lh = 'http://localhost:8000/';
//All files of directories
function filesRefresh(){
    get(lh, 'GET', 'text/plain')
      .then(function(text){
        var items = text.split('\n');
        //root path
        items.push('');
        var select = document.getElementById('files');
        for(var i = 0; i < items.length; ++i){
            var option = document.createElement('option');
            option.value = items[i];
            option.text = items[i];
            select.appendChild(option);
        }
    },
    function(error){
        console.log('ERROR: ' + error);
    });
};
//Call this after page loading
filesRefresh();

document.getElementById('files')
  .addEventListener('change', openFile);
document.getElementById('openFile')
  .addEventListener('click', openFile);

function openFile(){
    var file = document.getElementById('files').value;
    //lh - localhost
    get(lh + file, 'GET', 'text/plain')
      .then(function(text){
        document.getElementById('fileContent').value = text;
    },
    function(error){
        console.log('ERROR: ' + error);
    });
}
//Save file
document.getElementById('saveFile')
  .addEventListener('click', function(){
    var content = document.getElementById('fileContent').value;
    var file = document.getElementById('files').value;
    get(lh + file, 'PUT', 'text/plain', content)
      .then(function(){
        //alert is locked
        console.log('Файл сохранен!');
        //Page refresh
        location.reload();
    },
    function(error){
        console.log('ERROR: ' + error);
    });
});
//Delete file or catalog(empty)
document.getElementById('deleteFile')
  .addEventListener('click', function(){
    var file = document.getElementById('files').value;
    get(lh + file, 'DELETE', 'text/plain')
      .then(function(){
        console.log('Файл/каталог удален!');
        //Page refresh
        location.reload();
    },
    function(error){
        console.log('ERROR: ' + error);
    });
});
//File creating
document.getElementById('createFile')
  .addEventListener('click', function(){
    var file = document.getElementById('file').value;
    var path = document.getElementById('files').value;
    if(path !== ''){
        file = path + '/' + file;
    }
    get(lh + file , 'PUT', 'text/plain')
      .then(function(){
        console.log('Файл создан!');
        //Page refresh
        location.reload();
    },
    function(error){
        console.log('ERROR: ' + error);
    });
});
//Directory creating
document.getElementById('createFolder')
  .addEventListener('click', function(){
    var folder = document.getElementById('folder').value;
    var path = document.getElementById('files').value;
    if(path !== ''){
        folder = path + '/' + folder;
    }
    get(lh + folder, 'MKCOL', 'text/plain')
      .then(function(text){
        console.log('Каталог создан!' + text);
        //Page refresh
        location.reload();
    },
    function(error){
        console.log('ERROR: ' + error);
    });
});

function get(url, method, format, data = null) {
    return new Promise(function(succeed, fail) {
        var req = new XMLHttpRequest();
        req.open(method, url, true);
        req.setRequestHeader('Content-Type', format);
        req.addEventListener('load', function() {
            if (req.status < 400){
                succeed(req.responseText);
            }else{
                fail(new Error('Request failed: ' + req.statusText));
            }
        });
        req.addEventListener('error', function() {
            fail(new Error('Network error'));
        });
        req.send(data);
    });
}

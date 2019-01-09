function buildTable(data){
    var table = document.createElement('table');
    //Data for a header
    var keys = Object.keys(data[0]);
    var header = document.createElement('tr');
    //Creating a header
    for (var key in keys){
        if (keys.hasOwnProperty(key)){
            var cell = document.createElement('th');
            cell.appendChild(document.createTextNode(keys[key]));
            header.appendChild(cell);
        }
    }
    table.appendChild(header);
    //Filling data
    for (var i = 0; i < data.length; ++i){
        var row = document.createElement('tr');
        //Form col
        for (var k = 0; k < keys.length; ++k){
                var col = document.createElement('td');
                col.appendChild(document.createTextNode(data[i][keys[k]]));
                //Fields that contain numbers should be align right
                if (!isNaN(data[i][keys[k]])){
                    col.style.textAlign = 'right';
                }
                row.appendChild(col);
        }
        table.appendChild(row);
    }
    return table;
}

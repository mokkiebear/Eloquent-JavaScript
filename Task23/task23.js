function byTagName(node, tagName) {
    //I compare in uppercase
    tagName = tagName.toUpperCase();
    var array = [];
    search(node);
    //May I use recursion?
    function search(node1){
        var children = node1.childNodes;
        for (var i = 0; i < children.length; i++){
            if (children[i].nodeType === 1){
                if (tagName === children[i].tagName){
                    array.push(children[i]);
                }
                search(children[i]);
            }
        }
    }
    return array;
}

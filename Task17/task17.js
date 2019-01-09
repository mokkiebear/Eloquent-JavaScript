//This object from the task
var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked){
        throw new Error('Locked!');
    }
    return this._content;
  }
};

//My function
function withBoxUnlocked(body) {
    //false, box is opened
    var check = box.locked;
    if (check){
        box.unlock();
    }
    try{
        //I don't need catch block
        return body();
    }
    finally{
        //One more comment
        if (check){
            box.lock();
        }
    }
}

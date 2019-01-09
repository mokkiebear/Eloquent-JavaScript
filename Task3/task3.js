function isEven(num){
    if (num === 0) {
        //Number is even
        return true;
    }
    else if (num === 1 || num < 0) {
        //Number is odd or negative
        return false;
    }
    else {
        return isEven(num-2);
    }
}

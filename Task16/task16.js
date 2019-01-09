function multiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5){
      return a * b;
  }
  else{
      throw new multiplicatorUnitFailure();
  }
}

function reliableMultiply(a, b) {
    //One more comment line
        try{
            return primitiveMultiply(a, b);
        }
        catch (error){
            if (error instanceof multiplicatorUnitFailure){
                return reliableMultiply(a, b);
                //It works, I use recursion
            }
            else {
              //What to do if error !instanceof MUF?
                throw error;
            }
        }
}

console.log(reliableMultiply(8, 8));

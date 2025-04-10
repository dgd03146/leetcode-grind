/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map()
    const stack = [];
   
    map.set(")", "(")
     map.set("]", "[")
     map.set("}", "{")

  

    for(let i of s){
      if(i  === '(' || i=== '{' || i==='['){
        stack.push(i)
      }else{
        if(stack.pop() !== map.get(i)  )
        return false;
      }
    }

    return stack.length===0
};
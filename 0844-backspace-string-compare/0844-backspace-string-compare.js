/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const stack1 = []
    const stack2 = []
    for(let i of s){
        if(i==='#'){
            stack1.pop()
        }else{
            stack1.push(i)
        }
    }

    for(let i of t){
        if(i==='#'){
            stack2.pop(i)
        }else{
            stack2.push(i)
        }
    }

    return stack1.join('')===stack2.join('')
    
};
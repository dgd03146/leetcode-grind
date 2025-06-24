/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const answer=[]

    for(let i=0; i< n+1; i++) {
        let count=0;
        let binary = i.toString(2)

        for(let j of binary){
            if(j==='1'){
                count++
            }
        }
        answer.push(count)
    }

    return answer
};
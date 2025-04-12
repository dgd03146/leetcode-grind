/**
 * @param {string} s
 * @return {boolean}
 */
// a에서 z까지 다 나열하고 이거 아니면? 
// original이랑 stack으로 pop해서 더한거랑 같으면 같은거
// 일단 ,랑 띄어쓰기 이슨ㄴ거랑 : 잇는거 " 다 제껴야하는데..
// 그리고 소문자 만들어야함
// 알파벳인지 체크하는?

// for (let i = 97; i <= 122; i++) {
//     console.log(String.fromCharCode(i));
    
//     str += String.fromCharCode(i);
// }

var isPalindrome = function(s) {
    if(s.trim()==""){
        return true
    }

    if(s.length==2){
        s[0] !== s[1]
        return false
    }

   const lowerCase = s.toLowerCase()


    let front = ''
    
    let back =''


   for(let i of lowerCase){
    if(i.charCodeAt() >= 97 && i.charCodeAt()<=122){
       front += i
    }
   }
    



    for(let i=front.length-1; i>=0; i--){
        back += front[i]
    }



    return back == front
};
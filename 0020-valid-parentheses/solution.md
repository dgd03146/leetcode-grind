
## 🧠 Intuition  
처음에는 괄호 짝을 맞춰야 하니까, 자연스럽게 **해시맵을 사용하면 되겠다**는 생각이 들었다.  
하지만 **스택을 활용한다는 구조 자체는 전혀 떠올리지 못했다.**  
이번 문제를 통해 **“괄호 문제 = 스택”이라는 패턴**을 명확히 인식하게 되었다.

---

## 🧩 Approach  
- 닫는 괄호 → 여는 괄호를 매핑한 `Map`을 만든다.
- 문자열을 순회하면서,
  - 여는 괄호는 `stack.push()`
  - 닫는 괄호는 `stack.pop()`과 매핑값 비교
- 모든 문자 확인 후 **스택이 비어 있다면** 유효한 괄호 문자열

---

## ⏱ Complexity  
- **Time complexity**: $$O(n)$$  
- **Space complexity**: $$O(n)$$  

---

## 💻 Code
```javascript
var isValid = function(s) {
    const map = new Map();
    const stack = [];

    map.set(")", "(");
    map.set("]", "[");
    map.set("}", "{");

    for (let i of s) {
        if (i === "(" || i === "{" || i === "[") {
            stack.push(i);
        } else {
            if (stack.pop() !== map.get(i)) return false;
        }
    }

    return stack.length === 0;
};
```

---

## 📝 회고  
- 처음엔 **해시맵만 생각하고 스택은 전혀 떠올리지 못했다.**
- 이번 문제를 계기로, **괄호 문제는 무조건 스택**을 먼저 고려하는 사고방식을 갖게 되었다.
- 이런 “패턴 사고”를 더 많이 익혀서 문제 접근 시간을 줄여야겠다.

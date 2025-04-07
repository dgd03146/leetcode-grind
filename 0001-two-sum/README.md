

## 🧠 Intuition
처음엔 단순하게 **브루트포스 방식으로** 두 수의 합을 전부 확인해보면 풀 수 있다고 생각했다.  
하지만 이 방식은 **시간복잡도 O(n²)**로 비효율적이기 때문에, 더 효율적인 방법(O(n))을 고민해보았다.



## 🧩 Approach 1 - Brute Force
배열을 이중 반복문으로 순회하면서, 합이 `target`이 되는 두 수의 인덱스를 찾는 방식이다.



## ⏱️ Complexity

- **Time complexity**: $$O(n^2)$$  
- **Space complexity**: $$O(1)$$



## 💻 Code
```javascript
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};
```

<br/>

## 🧩 Approach 2 - Hash Map (Optimized)
배열을 한 번 순회하면서, 각 숫자의 보완값(`target - nums[i]`)이 이전에 등장했는지를 해시맵으로 빠르게 확인한다.  
이 방법은 시간복잡도 O(n)으로 최적화되어 있으며, 매우 흔히 쓰이는 패턴이다.



## ⏱️ Complexity

- **Time complexity**: $$O(n)$$  
- **Space complexity**: $$O(n)$$



## 💻 Code
```javascript
var twoSum = function(nums, target) {
    const map = new Map(); // {값: 인덱스}
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};
```



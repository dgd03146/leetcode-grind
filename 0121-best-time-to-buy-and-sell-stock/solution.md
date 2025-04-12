

## 🧠 Intuition  
"살 때는 싸게 사고, 팔 때는 비싸게 팔아야 한다"는 개념을 먼저 떠올렸다.  
그래서 주가 중 가장 작은 값을 먼저 찾아야겠다고 생각했고,  
그 후로는 **이익(profit)** 을 계속 비교해서 **최대값으로 갱신**해가야겠다고 생각했다.

---

## 🔍 Approach  
처음엔 `min`을 최대값으로 설정하고 시작했다가,  
지금은 **더 안전하게 `min = prices[0]`으로 초기화**하는 방식이 낫다는 걸 깨달았다.

`for`문을 돌면서  
- `min`을 지금까지의 **최소 가격**으로 유지하고  
- 매일의 가격과 `min`을 비교해 **현재 수익을 계산**한 뒤  
- `profit`이라는 변수에 지금까지의 **최대 수익을 저장**하는 방식이다.

---

## ⏱ Complexity

- **Time complexity:** $$O(n)$$  
  한 번의 순회로 해결

- **Space complexity:** $$O(1)$$  
  변수 두 개만 사용 (min, profit)

---

## 💻 Code

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]; // 첫 날 가격으로 초기화
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]; // 더 싼 가격이 있으면 갱신
        } else {
            profit = Math.max(profit, prices[i] - min); // 수익 최대값 갱신
        }
    }

    return profit;
};
```

---

## ✍️ 회고
- 처음엔 `9999`로 초기화했지만, 배열의 첫 값을 `min`으로 쓰는 게 더 자연스럽고 안전하다는 걸 알게 됐다.
- 이 문제는 결국 “**지금까지 가장 싼 날에 샀다고 가정하면, 오늘 팔면 얼마 이득일까?**”를 매일 계산하는 문제다.
- 이렇게 **최솟값을 유지하면서 현재 수익을 비교**하는 방식은  
  다른 문제들에도 그대로 적용될 수 있는 강력한 패턴임을 느꼈다.

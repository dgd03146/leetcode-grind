## 🧠 Intuition
처음에는 `ListNode`라는 자료구조 개념을 몰라서 아예 접근 자체가 불가능했다.  
배열처럼 `for`문으로 인덱스로 순회하려고 했지만 에러가 났고,  
왜 안 되는지도 잘 몰랐다.  

그래서 결국 문제를 직접 푸는 건 포기하고, 답을 먼저 보고 구조부터 이해했다.  
이 문제를 통해 **연결 리스트는 배열과 다르게 `.next`로만 접근할 수 있는 구조**라는 걸 처음 배웠다.

---

## 🔍 Approach
1. `dummy`라는 **더미 노드**를 만들어서 결과 연결 리스트의 시작점을 쉽게 만들었다.
2. `current` 포인터를 이용해 `list1`, `list2`의 현재 노드를 비교하며 더 작은 값을 `current.next`에 연결했다.
3. 둘 중 하나가 끝나면, **남은 리스트 전체를 그냥 붙인다** (정렬되어 있으니까).
4. 마지막에 `dummy.next`를 반환하면, 병합된 정렬 리스트의 **진짜 시작점**이 된다.

> `dummy`를 사용하는 이유는 **처음 노드 연결을 따로 예외 처리하지 않기 위해서**이다.  
> 항상 `dummy.next`부터 시작하면 일관된 방식으로 연결 리스트를 만들 수 있다.

---

## ⏱️ Complexity

- **시간복잡도:** $$O(n + m)$$  
  두 리스트를 한 번씩만 순회함.

- **공간복잡도:** $$O(1)$$  
  새로운 노드를 만들지 않고, 기존 노드를 재사용.

---

## 💻 Code

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(); // 결과 연결 리스트의 더미 시작점
    let current = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;

    return dummy.next; // 진짜 결과는 dummy 다음 노드부터 시작
};
```

---

## ✍️ 회고
- 연결 리스트(`ListNode`)를 처음 접했기 때문에, 아예 문제 접근이 불가능했다.
- 답을 보고 나서야 **연결 리스트는 배열과는 완전히 다르다**는 걸 체감했고,  
  `.next`로 노드를 이어붙이는 방식에 익숙해져야 함을 느꼈다.
- 특히 `dummy.next`를 반환하는 이유도 처음엔 이해가 안 됐지만,  
  결과 리스트를 처음부터 쉽게 만들기 위해 사용하는 중요한 패턴이라는 걸 배웠다.
- 이 문제를 통해 **연결 리스트의 기본 구조와 패턴**을 확실히 익힐 수 있었다.


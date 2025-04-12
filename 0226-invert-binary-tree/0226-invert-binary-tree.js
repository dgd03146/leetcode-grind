/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**

 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 젤 첫번째 숫자가 항상 루트
// 그다음 2번째 3번째 숫자들이 루트
// 하나씩 바꾸고 2개씩 바꾸고 

var invertTree = function(root) {
   
  if(!root) return null

  let left = invertTree(root.left)
  let right = invertTree(root.right)

  root.right = left
  root.left = right
  
    return root
};
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[start] = nums[i];
            start++;
        }
    }

    for(let i=start; i<nums.length; i++){
        nums[i] =0
    }

    return nums
};
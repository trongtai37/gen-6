// Solution for https://leetcode.com/problems/k-diff-pairs-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    let ans = 0;
    const hashMap = {} // Key: nums[i], Value: { frequency, visited }

    for (let num of nums) {
        if (num in hashMap) hashMap[num].freq += 1;
        else hashMap[num] = { freq: 1, visited: false };
    }

    if (k == 0) {
        for (let key of Object.keys(hashMap)) {
            if (hashMap[key].freq >= 2) ans += 1;
        }
        return ans;
    }

    for (let i = 0; i < nums.length; i++) {
        if(hashMap[nums[i]].visited) continue;
        const target1 = nums[i] - k;
        const target2 = nums[i] + k;

        if(target1 in hashMap && !hashMap[target1].visited) ans += 1;
        if(target2 in hashMap && !hashMap[target2].visited) ans += 1;

        hashMap[nums[i]].visited = true;
    }
    return ans;
};
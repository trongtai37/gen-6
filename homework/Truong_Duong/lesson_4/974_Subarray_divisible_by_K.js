// Solution for https://leetcode.com/problems/subarray-sums-divisible-by-k/


var subarraysDivByK = function (nums, k) {
    let ans = 0;
    const size = nums.length;
    const prefixSum = new Array(size).fill(0);
    prefixSum[0] = nums[0]
    const hashMap = {} // key => value, remain => frequent

    for (let i = 1; i < size; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }

    for (let i = 0; i < size; i++) {
        const remain = (prefixSum[i] % k + k) % k;
        if (remain in hashMap) {
            hashMap[remain] += 1;
        } else {
            hashMap[remain] = 1;
        }
    }

    for (let key of Object.keys(hashMap)) {
        const frequent = hashMap[key];
        if (frequent >= 2) {
            ans += frequent * (frequent - 1) / 2;
        }
        if (key == 0) {
            ans += frequent;
        }
    }
    return ans;
};

console.log(subarraysDivByK([8,9,7,8,9], 8));
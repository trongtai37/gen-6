// Solution for https://leetcode.com/problems/4sum/

var fourSum = function (nums, target) {
  const ans = [];
  nums.sort((x, y) => x - y);

  for (let i = 0; i < nums.length; i++) {
    const target2 = target - nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const target3 = target2 - nums[j];

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum < target3) left++;
        else if (sum > target3) right--;
        else {
          const temp = new Array(4);
          temp[0] = nums[i];
          temp[1] = nums[j];
          temp[2] = nums[left];
          temp[3] = nums[right];
          ans.push(temp);

          while (left < right && nums[left] === temp[2]) left++;
          while (left < right && nums[right] === temp[3]) right--;
        }
      }

      while (j + 1 < nums.length && nums[j + 1] === nums[j]) j++;
    }
    while (i + 1 < nums.length && nums[i + 1] === nums[i]) i++;
  }
  return ans;
};
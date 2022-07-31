function sortArrayByParity(nums: number[]): number[] {
  let boundary = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      const temp = nums[i];
      nums[i] = nums[boundary];
      nums[boundary++] = temp;
    }
  }

  return nums;
};
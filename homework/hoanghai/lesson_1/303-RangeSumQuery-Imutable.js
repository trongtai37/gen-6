/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
    this.sumAt = []
    this.prefixSum = function() {
        this.sumAt = []
        if (nums.length > 0) {
            this.sumAt.push(nums[0])
            for (let i = 1; i < nums.length; i++) {
                this.sumAt[i] = nums[i] + this.sumAt[i-1]
            }
        }
    }
    // this.get = function(){
    //     console.log(this.sumAt)
    // }
    this.getSumAt = function (i) {
        return this.sumAt[i]
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    this.prefixSum()
    // this.get()
    if(left === 0) {
        return this.getSumAt(right)
    }
    return this.getSumAt(right) - this.getSumAt(left-1)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
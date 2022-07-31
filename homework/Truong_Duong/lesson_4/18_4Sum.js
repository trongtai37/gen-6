// Solution for https://leetcode.com/problems/4sum/

var fourSum = function(nums, target) {
    const ans = [];
    nums.sort((x, y) => x- y);
        
    for(let i = 0; i < nums.length; i++){
        const target2 = target - nums[i];
        
        for(let j = i + 1; j < nums.length; j++){
            const target3 = target2 - nums[j];
            
            var front = j + 1;
            var back = nums.length - 1;
            
            while(front < back){
                const sum = nums[front] + nums[back];
                if(sum < target3) front++;
                else if(sum > target3) back--;
                else{
                    const temp = new Array(4);
                    temp[0] = nums[i];
                    temp[1] = nums[j];
                    temp[2] = nums[front];
                    temp[3] = nums[back];
                    ans.push(temp);
                    
                    while(front < back && nums[front] === temp[2]) front++;
                    while(front < back && nums[back] === temp[3]) back--;
                }
            }
            
            while(j + 1 < nums.length && nums[j + 1] === nums[j]) ++j;
        }
        while(i + 1 < nums.length && nums[i + 1] === nums[i]) ++i;
    }
    return ans;
};
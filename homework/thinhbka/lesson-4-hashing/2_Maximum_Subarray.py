# arr  = [-1, 4, -1, 7, 8]

#sum(i,j) = preS[j] - preS[i-1] 
# sum(i,j) max <=> preS[j] is biggest, and preS[i-1] smallest, i-1 <= j
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        preS =[0]
        for e in nums:
            preS.append(e+preS[-1])
        ans = -1e9
        minSoFar = 0
        for e in preS:
            ans = max(ans,e-minSoFar)
            minSoFar = min(minSoFar,e)
        return ans

# Devide and Conquer approach


# Phải tính từ giữa
def calMid(nums,start,mid,end):
    leftPartSum = -1e9
    rightPartSum = -1e9
    s = 0
    for i in range(mid,start-1,-1):
        s += nums[i]
        if s >= leftPartSum:
            leftPartSum = s
    s = 0
    for i in range(mid+1,end+1):
        s+=nums[i]
        if s >=rightPartSum:
            rightPartSum = s
    return leftPartSum+rightPartSum


# Chia mảng ra làm 2 thành phần
# Tìm tổng sub array bên trái lớn nhất
# Tìm tổng sub array bên phải lớn nhất
# ở Bước merge kết quả, ta phải tính thêm trường hợp sub array có tổng lớn nhất bắt đầu từ trái và kết thúc ở bên phải
# Trả lại kết quả lớn nhất của 3 trường hợp vừa trên
def devideAndConquer(nums,start,end):
    if start == end:
        return nums[start]
    mid = (start + end)>>1
    lefMax = devideAndConquer(nums,start,mid)
    rightMax = devideAndConquer(nums,mid+1,end)
    midMax = calMid(nums,start,mid,end)
    return max(lefMax,rightMax,midMax)


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        return devideAndConquer(nums,0,len(nums)-1)


# Kanade's algorithm:
# Kết quả chỉ được cập nhật nếu kết quả tại mỗi thời điểm chạy tốt hơn trước đó. 
# Ngược lại ta bỏ qua. 
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = nums[0]
        curSum = nums[0]
        for e in nums:
            curSum += e
            maxSum = max(maxSum,curSum)
            if curSum < 0:
                curSum = 0
        return maxSum
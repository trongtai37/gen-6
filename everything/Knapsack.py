# 01 K Snapsack
T  = int(input())
for _ in range(T):
    S,N = map(int,input().split(" "))
    items = [(0,0)]
    for i in range(N):
        weight,cost = map(int,input().split(" "))
        items.append((weight,cost))
    items.sort(key=lambda x:x[0])
    dp = [[0 for _ in  range(S+1)] for _ in range(N+1)]
    for i in range(1,N+1):
        (weight,cost)= items[i]
        for j in range(0,S+1):
            if j < weight:
                dp[i][j] = dp[i-1][j]
            else:
                dp[i][j] = max(dp[i-1][j], cost+dp[i-1][j-weight])
    print()
    for e in dp:
        print(e)
    
    print(dp[-1][-1])
    print()

# Unbounced K Snapsack
T = int(input())
for _ in range(T):
    n,target = map(int,input().split())
    arr = list(map(int,input().split()))
    arr.sort()
    dp = [0]*2001
    for i in range(1,2001):
        for j in range(len(arr)):
            num = arr[j]
            if num>i:
                dp[i] = dp[i]
            else:
                dp[i] = max(dp[i],num + dp[i-num])
        if dp[i]>=target:
            break
    # print(dp)
    ans = dp[0]
    for e in dp:
        if e >= ans and e <=target:
            ans = e
    print(ans)

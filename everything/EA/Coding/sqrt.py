from datetime import datetime
from msilib.schema import Error
import random
from sqlite3 import Time
import datetime


def sqrt_iterative(N,epsilon):
    if N == 0 or N == 1:
        return N
    upper = 0
    for i in range(N):
        if i*i >N:
            upper = i
            break
        if i*i==N:
            return i
    lower = upper-1
    result = lower
    while True:
        diff = abs(result*result-N)
        # print(result,N**0.5)
        if diff >=epsilon:
            result+=epsilon*0.01
        else:
            break
    return result
def bSearch(N,ep):
    l = 1
    r = N
    mid = (l+r)/2.
    while abs(mid -N**0.5)>=ep:
        if mid*mid > N:
            r = mid
        else:
            l = mid
        mid = (l+r)/2.
    return mid
def sqrt(N,epsilon):
    if N<0:
        print(N)
        raise Error
    if N == 0 or N == 1:
        return N
    if N<1:
        return bSearch(1./N,epsilon)
    return bSearch(N,epsilon)

def newton_rapshon(N,ep):
    result = (N/2.)
    while abs(result-N**0.5)>=ep:
        predict = (result+N/result)/2.
        result = predict
    return result
arr = []
start =datetime.datetime.now()
for i in range(500):
    N = random.randint(0,int(1e10))
    # print(N)
    ep = 0.00000000000001
    sqrt_N = sqrt(N,ep)
    print(abs(sqrt_N-N**0.5)< ep,sqrt_N,N**0.5)

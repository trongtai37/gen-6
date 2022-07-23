class Solution {
    
    Map<Integer,Integer> map = new HashMap<>();
    
    public boolean isHappy(int n) {
        int sum = sumSquaresOfNumber(n);
        if( sum == 1) return true;
        if(map.containsKey(sum)) return false;
        map.put(sum, 1 );
        return isHappy(sum);
        
    }
    
    public static int sumSquaresOfNumber(int n){
        int sum = 0;
        while(n > 0){
            int rem = n%10;
            sum += rem * rem;
            n = n/10;
        }
        return sum;
    }
}
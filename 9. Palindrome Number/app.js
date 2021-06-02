var isPalindrome = function(x) {
    if(x<0){return false}
    
    function rev(x){
        res = 0
        
        while(x>=1){
            res = res*10 + x%10
            x = Math.floor(x/10)
        }
        
        return res
           
    }
    
    x_rev = rev(x)
    return x_rev == x
    
};
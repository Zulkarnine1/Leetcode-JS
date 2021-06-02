// Method 1 using iteration 

var reverse = function(x) {
    
    function iteration(x){
        let result = ""
        for(i=x.length-1;i>=0;i--){
            result = result + x[i]
        }
        return result
    }
    
    let x_neg = (x<0)
    let sol
    x = x.toString()
    if(x_neg){
        x = x.slice(1,x.length)
        sol = -1 * Number(iteration(x))
    }else{
        sol = Number(iteration(x))
    }
    
    if(sol<=Math.pow(-2,31) || sol>= (Math.pow(2,31)-1)){
        return 0
    }else{
        return sol
    }
    
    

};

// Method 2 using recursion 


var reverse2 = function(x) {
    
    function recursion(x){
        if(x.length<=1){
            return x
        }else{
            return recursion(x.slice(1,x.length)) + x[0]
        }
    }
    
    let x_neg = (x<0)
    let sol
    x = x.toString()
    if(x_neg){
        x = x.slice(1,x.length)
        sol = -1 * Number(recursion(x))
    }else{
        sol = Number(recursion(x))
    }
    
    if(sol<=Math.pow(-2,31) || sol>= (Math.pow(2,31)-1)){
        return 0
    }else{
        return sol
    }
    
    

};

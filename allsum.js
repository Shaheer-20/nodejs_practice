function sum(startindex,endindex){
    var sum=0;
    for(var i=startindex;i<=endindex;i++){
        sum+=i;
    }
    return sum;
}

var sum=sum(1,2)
console.log(sum);

function count(fst,lst){
    var sum=0;
    for(var i=fst;i<=lst;i++){
        sum=sum+i;
    }
    return sum ;
}
var answer=count(1,101);
console.log(answer);


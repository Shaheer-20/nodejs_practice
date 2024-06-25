function startline(n){
    var answer="";
    for(var i=0;i<=n;i++){
        var answer=answer+ "**";
    }
    console.log(answer);
}

function startpattern(n){
    for(var i=0;i<=n;i++){
        startline(i);
}
}
var answer=startpattern(10);
console.log(answer);
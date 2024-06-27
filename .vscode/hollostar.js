function printrow(n){
    var str=" ";
    for(var i=0;i<n;i++){
        str+="*";
    }
    console.log(str);
}

function printpartialrow(n){
    var str=" ";
    str=str+"*";
    for(var i=0;i<n-2;i++){
        str=str+" ";   
     }
     str=str+"*";  
    console.log(str);
}


function printwholeThing(n)
{
    printrow(n);
    for(var i=0;i<n-2;i++){
        printpartialrow(n);
    }
    printrow(n);
}
printwholeThing(10);
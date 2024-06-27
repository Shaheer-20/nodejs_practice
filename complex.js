function complexFn(n)
{
    let sum=0;
    for(i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

var startime = new Date().getTime();

const a=complexFn(103333300);

var endtime=new Date().getTime();

console.log(endtime-startime)/100000;


// shows the thread usage of the system 
// JS is a single thread
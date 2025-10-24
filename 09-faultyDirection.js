//my approach

function  faultyDirection(n,str) {
    let arr = [0, 0];
    let dir = str.split('');
    //console.log(dir);
    
    for(let i=0; i<n; i++){
      if(dir[i]==='L') arr[0]-=1;
      else if(dir[i]==='R') arr[0]+=1;
      else if(dir[i]==='U') arr[1]+=1;
      else if(dir[i]==='D') arr[1]-=1;
      else break;
    }
    
    if(arr[0]===0 && arr[1]===0) console.log('Yes');
    else console.log('No');
}

function takeInput(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  const a = input.split('\n');
  const testcases = parseInt(a[0], 10);
  a.shift();
  for(let i=0; i<a.length; i+=2){
    let n = parseInt(a[i], 10);
    let str = a[i+1];
    //console.log(str);
    faultyDirection(n, str);
  }
}
takeInput();

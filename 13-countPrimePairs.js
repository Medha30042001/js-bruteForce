//my attempt

function isPrime(num){
  if(num<=1) return true;
  for(let i=2; i<num; i++){
    if(num%i===0) return false;
  }
  return true;
}


function countSuchPair(N,arr){
  let count = 0;
  for(let i=0; i<N-1; i++){
    if(isPrime(arr[i]+arr[i+1])){
      count++;
    }
  }
  console.log(count);
}

function takeInput(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  const a = input.split('\n');
  const testcases = parseInt(a[0], 10);
  a.shift();
  for(let i=0; i<2*testcases; i+=2){
    let n = parseInt(a[i], 10);
    let arr = a[i+1]; 
    countSuchPair(n, arr);
  }
}
takeInput();

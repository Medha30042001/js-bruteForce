//my approach

function newYorkSkylines(n, arr) {
  let str = '';
    for(let i=0; i<n; i++){
      if(i==0){
        if(arr[i]<=arr[i+1]) str+=0 + ' ';
        else str+=1 + ' ';
      }else if(i==n-1){
        if(arr[i-1]>=arr[i]) str+=0 + ' ';
        else str+=1 + ' ';
      }else{
        if(arr[i-1]<arr[i] && arr[i]>arr[i+1]) str+=2 + ' ';
        else if(arr[i-1]<arr[i] || arr[i]>arr[i+1]) str+=1 + ' ';
        else str+=0 + ' ';
      }
    }
    console.log(str.trim());
}

function takeInput(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  const a = input.split('\n');
  const testcases = parseInt(a[0], 10);
  a.shift();
  for(let i=0; i<a.length; i+=2){
    let n = parseInt(a[i], 10);
    let arr = a[i+1].split(' ').map(Number);
    newYorkSkylines(n, arr);
  }
}
takeInput();

//my approach

function cipherString(n, str) {
  let arr = str.split('');
  let newStr = '', i=0;
    while(i<n){
      let count = 0; flag = true;
      for(let j=i; j<n; j++){
        if(arr[i]==arr[j]){
          count++;
        }else {
          flag = false;
          break;
        }
        if(flag == false) break;
      }
      newStr += arr[i] + count;
      i+=count;
    }
    console.log(newStr);
}

function takeInput(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  const a = input.split('\n');
  let testcases = parseInt(a[0], 10);
  a.shift();
  //console.log(a);
  for(let i=0; i<a.length; i+=2){
      let n = parseInt(a[i], 10);
      let str = a[i+1];
      cipherString(n, str);
  }
}
takeInput();

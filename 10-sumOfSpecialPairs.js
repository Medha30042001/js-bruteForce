//my approach

function isPrime(i, j){
  let diff = j-i;
  
  if(diff<=1) return true;
  
  for(let k=2; k<diff; k++){
    if(diff%k===0 && diff!=2){
      return false;
    }
  }
  return true;
}
//console.log(isPrime(3, 20));

function sumOfSpecialPairs(N,A){
  //console.log(A);
  let sum=0;
    for(let i=0; i<N; i++){
      let j=i+2;
      while(j<N){
        if(i<j && isPrime(i, j)){
          //console.log(i, j);
          sum+=Math.abs(A[i]-A[j]);
        }
        j++;
      }
    }
    console.log(sum);
}

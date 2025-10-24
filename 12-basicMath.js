//my attempt

function applyBasicMaths(N,A){
  //console.log(A);
  let sum = 0;
    for(let i=0; i<N; i++){
      sum+=A[i];
    }
    //console.log(sum);
    let min = Infinity; res = 0;
    for(let j=0; j<N; j++){
      if((sum-A[j])%7==0 && min>A[j]){ 
        min = A[j]; res = j;
      }
    }
    if(min == Infinity) console.log(-1);
    else console.log(res);
}

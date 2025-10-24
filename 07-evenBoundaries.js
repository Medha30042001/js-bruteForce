//my approach

function evenBoundaries(N,arr) {
  let count = 0;
  
  for(let i=0; i<N; i++){
    for(let j=i; j<N; j++){
      if(Math.abs(arr[i]-arr[j])%2===0){
        //console.log(arr[i], arr[j]);
        count++;
      }
    }
  }
  console.log(count);
}

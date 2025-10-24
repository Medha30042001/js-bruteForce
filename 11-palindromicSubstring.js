//my approach

function isPalindrome(S){
  let arr = S.split('');
  SS = arr.reverse().join('');
  //console.log(SS);
  if(S===SS){
    return true;
  }
  return false;
}

function masaiPalSubString(S){
  let max = 0;

    for(let i=0; i<S.length; i++){
      for(let j=i+1; j<=S.length; j++){
        if(isPalindrome(S.slice(i, j)) && max<S.slice(i, j).length){
          max = S.slice(i, j).length;
        }
      }
    }
  console.log(max);
}

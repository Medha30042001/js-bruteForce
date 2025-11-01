//my approach

function isPalindrome(S){
  let SS = S.split('').reverse().join('');
  console.log(SS);
  if(S===SS){
    return true;
  }
  return false;
}
//isPalindrome('thisracecarisgood');

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

//masaiPalSubString('thisracecarisgood');

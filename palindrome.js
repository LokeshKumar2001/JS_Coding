function palindrome(n) {
  let n1 = n;
  let rev = 0;
  while (n1 != 0) {
    let rem = n1 % 10;
    rev = rev * 10 + rem;
    n1 = Math.floor(n1 / 10);
  }
  return rev === n ? true : false;
}

// let res = palindrome(1441);
// console.log(res);

function palindrome1(str) {
  let org = str;
  str = str.split("");
  let l = 0,
    h = str.length - 1;
  while (l <= h) {
    // while(l<h)
    let temp = str[l]; // if(str[l]!=str[h]) return false; l++,h--;
    str[l] = str[h];
    str[h] = temp;
    l++;
    h--;
  }
  return str.join("") === org;
}

str = "malayalam";
console.log(palindrome1(str));

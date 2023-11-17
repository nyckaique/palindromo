// Esse código é um exercício do FreeCodeCamp que serve para identificar palindromos
function palindrome(str) {
  var str2 = [];
  var str3 = [];
  for (const x of str) {
    if (
      x !== " " &&
      x != "!" &&
      x !== "@" &&
      x !== "#" &&
      x !== "$" &&
      x !== "%" &&
      x !== "¨" &&
      x !== "&" &&
      x !== "*" &&
      x !== "(" &&
      x !== ")" &&
      x !== "," &&
      x !== "_" &&
      x !== "." &&
      x !== ":" &&
      x !== "-" &&
      x !== "|" &&
      x !== "/" &&
      x !== "?"
    ) {
      str2.unshift(x.toLowerCase());
      str3.push(x.toLowerCase());
    }
  }
  console.log(str2);
  console.log(str3);
  for (var y = 0; y < str2.length; y++) {
    if (str2[y] !== str3[y]) {
      return false;
    }
  }
  return true;
}

palindrome("aba");

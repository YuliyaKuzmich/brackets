//module.exports = 
function check(str, bracketsConfig) {
  // your solution
 let stack = [];
 for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{' || str[i] === '|') {
      stack.push(str[i]);
    } else if (str.length > 0
      && str[i] === ')' && stack[stack.length - 1] === ')' ||
      && str[i] === ')' && stack[stack.length - 1] === ')' ||
      && str[i] === ')' && stack[stack.length - 1] === ')' ||
      && str[i] === ')' && stack[stack.length - 1] === ')' ||
      )
 }

}


([{||}])
module.exports = function check(str, bracketsConfig) {
  // your solution
 
  let opened = [];

  let sameSymbol = [];

  let closed = [];

  bracketsConfig.forEach((element) => {
    if (element[0] === element[1]) {
      sameSymbol.push(element[0]);
    }
      opened.push(element[0]);
      closed.push(element[1]);
    

  })

 let stack = [];
 for (let char in str) {
    console.log(str[char])
    if ( closed.includes(str[char])) {
      const topElement = stack[stack.length - 1]; 
      if (sameSymbol.includes(str[char]) && topElement !== str[char]) {
        stack.push(str[char]);
        continue;
      }
      if (stack.length > 0 && topElement === opened[closed.indexOf(str[char])]) {
        stack.pop();
      } else {
        console.log(`top: ${topElement}`)
        console.log(`open: ${opened[closed.indexOf(str[char])]}`)
        return false;
      }

  } else if (opened.includes(str[char])) {
      stack.push(str[char]);
    } 

 } 
 return stack.length === 0;

}

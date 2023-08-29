module.exports = function check(str, bracketsConfig) {
  // your solution
 
  let opened = [];

  let sameSymbol = [];

  let closed = [];

  bracketsConfig.forEach((element) => {
    if (element[0] === element[1]) {
      sameSymbol.push(element[0]);
    } else {
    opened.push(element[0]);
    closed.push(element[1]);
    }

  })

 let count = 0;
 let stack = [];
 console.log(opened)
 console.log(closed)
 for (let i = 0; i < str.length; i++) {
    if (sameSymbol.includes(str[i])) {
      count = 
    }
    if (opened.includes(str[i])) {
      stack.push(str[i]);
    } else if ( str[i].length > 0 && closed.includes(str[i]) && 
        stack[stack.length-1] === opened[closed.indexOf(str[i])]) {
      stack.pop();
    }else {
      return false
    }

 } 
 return stack.length === 0;

}

//7, 11,12, 15, 19, 20

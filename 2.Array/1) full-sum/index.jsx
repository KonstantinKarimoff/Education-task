
function fullSum(...args) {
  
  let arr = [];
  for (let i = 0; i < args.length; i++) {
    arr[i] = args[i];
    if (typeof args[i] !== 'number' || Number.isNaN(args[i])) {throw new Error("Wrong Argument Type")};
  };

  return arr.reduce(function(x, y) { return x + y; }, 0);

}
window.fullSum = fullSum;




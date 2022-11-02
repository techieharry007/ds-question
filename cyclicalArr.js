//cyclical reverse of array
let cycle = 2;
let target = 0;
let ar = [1, 2, 3, 4, 5];
for (let i = ar.length - 1; i > 0; i--) {
  if (target === cycle) {
    break;
  } else {
    target += 1;
    let temp = ar[ar.length - 1];
    ar.splice(ar.length - 1, 1);
    ar.unshift(temp);
  }
}
console.log(ar);
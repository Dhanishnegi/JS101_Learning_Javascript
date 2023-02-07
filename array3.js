let N = 5;

let arr = [1, 2, 3, 4, 5];
let b = ""
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == N) {
    arr[i] = N;
  }
  b = b + arr[i] + " ";
}
console.log(b);

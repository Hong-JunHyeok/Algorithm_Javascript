function solution(n, arr) {
  const temp = [];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        temp.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  const s = new Set(temp.sort((a, b) => b - a));
  console.log(s);
  return Array.from(s)[n - 1];
}

console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));

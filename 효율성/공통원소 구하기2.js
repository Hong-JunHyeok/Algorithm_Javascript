function solution(a, b) {
  const answer = [];

  const n = a.length;
  const m = b.length;

  let p1 = (p2 = 0);

  a = a.sort((a, b) => a - b);
  b = b.sort((a, b) => a - b);

  while (p1 < n && p2 < m) {
    if (a[p1] === b[p2]) {
      answer.push(a[p1]);
      p1++;
      p2++;
    } else if (a[p1] < b[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  console.log(answer);

  return;
}

solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8, 9]);

function solution(a, b) {
  const answer = [];
  let p1 = (p2 = 0);

  const n = a.length;
  const m = b.length;

  while (p1 < n && p2 < m) {
    // 둘 중 하나가 끝날때까지
    if (a[p1] < b[p2]) answer.push(a[p1++]);
    else answer.push(b[p2++]);
  }

  while (p1 < n) answer.push(a[p1++]);
  while (p2 < m) answer.push(b[p2++]);

  console.log(answer);
  return answer;
}

solution([1, 3, 5], [2, 3, 6, 7, 9]);
// console.log(solution())

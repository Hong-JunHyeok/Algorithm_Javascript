function solution(n, k) {
  let answer = 0;
  const queue = Array.from({ length: n }, (_, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  console.log(answer);
  return answer;
}

solution(8, 3);
// console.log(solution())

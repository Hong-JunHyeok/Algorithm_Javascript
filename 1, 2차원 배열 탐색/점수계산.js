function solution(c) {
  let answer = c[0];
  let acc = 0;

  for (let i = 1; i < c.length; i++) {
    if (c[i] === 1) {
      answer += acc + 1;
      acc += 1;
    } else if (c[i] === 0) {
      acc = 0;
    }
  }

  return answer;
}

// solution();
console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

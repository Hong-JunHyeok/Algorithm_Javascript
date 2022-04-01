function solution(scores) {
  let answer = Array(scores.length).fill(1);
  const n = answer.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (scores[i] > scores[j]) {
        answer[j] += 1;
      }
    }
  }

  return answer;
}

// solution();
console.log(solution([92, 92, 92, 100, 76]));

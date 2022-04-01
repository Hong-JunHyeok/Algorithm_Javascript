function solution(str, target) {
  let answer = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) answer += 1;
  }

  return answer;
}

// solution();
console.log(solution("COMPUTERPROGRAMMING", "R"));

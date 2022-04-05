function solution(s) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push("(");
    else if (s[i] === ")") {
      stack.pop();
      if (s[i - 1] === "(") {
        // 레이저인 경우
        answer += stack.length;
      } else {
        // 나무의 끝인 경우
        answer += 1;
      }
    }
  }

  console.log(answer);

  return answer;
}

solution("(((()(()()))(())()))(()())");

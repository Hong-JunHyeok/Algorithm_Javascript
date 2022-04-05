function solution(s) {
  const stack = [];
  let answer = 0;

  for (const c of s) {
    if (!isNaN(c)) {
      // 숫자인 경우
      stack.push(parseInt(c, 10));
    } else {
      // 연산자인 경우
      const lt = stack.pop();
      const rt = stack.pop();

      switch (c) {
        case "+":
          answer = rt + lt;
          stack.push(answer);
          break;
        case "-":
          answer = rt - lt;
          stack.push(answer);
          break;
        case "*":
          answer = rt * lt;
          stack.push(answer);
          break;
        case "/":
          answer = rt / lt;
          stack.push(answer);
          break;
        default:
      }
    }
  }

  return stack.pop();
}

console.log(solution("25-"));

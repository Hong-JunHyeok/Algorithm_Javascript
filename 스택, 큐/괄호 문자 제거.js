function solution(s) {
  let answer = "";
  const stack = [];

  for (const c of s) {
    if (c === ")") while (stack.pop() !== "(");
    else stack.push(c);
  }

  answer = stack.join("");
  console.log(answer);
  return answer;
}

solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)(AASKJDNKJSAND)()ASD");

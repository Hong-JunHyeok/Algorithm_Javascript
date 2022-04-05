function solution(s) {
  const st = [];

  for (const c of s) {
    if (c === "(") st.push(c);
    else st.pop();
  }

  if (st.length === 0) return "YES";

  return "NO";
}

console.log(solution("(())(()"));

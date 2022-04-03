function solution(s, c) {
  const len = s.length;
  let p = len + 1;
  const answer = [p];

  for (let i = 1; i < len; i++) {
    if (s[i] === c) p = 0;
    else p += 1;

    answer[i] = p;
  }

  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === c) p = 0;
    else p += 1;

    if (answer[i] > p) answer[i] = p;
  }

  console.log(answer);
  return answer;
}

solution("teachermode", "e");

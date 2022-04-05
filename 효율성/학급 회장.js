function solution(s) {
  let answer = "";
  const mp = new Map();

  for (const c of s) {
    if (mp.has(c)) {
      mp.set(c, mp.get(c) + 1);
    } else mp.set(c, 1);
  }

  answer = [...mp.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  console.log(answer);

  return answer;
}

solution("BACBACCACCBDEDE");

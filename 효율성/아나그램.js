function mapSetter(s, mp) {
  for (const c of s) {
    if (mp.has(c)) mp.set(c, mp.get(c) + 1);
    else mp.set(c, 1);
  }
}

function solution(s1, s2) {
  let answer = "YES";
  const mp1 = new Map();
  const mp2 = new Map();

  mapSetter(s1, mp1);
  mapSetter(s2, mp2);

  for (const [k, v] of mp1.entries()) {
    if (v !== mp2.get(k)) {
      answer = "NO";
      break;
    }
  }

  console.log(answer);
  return answer;
}

solution("abaCC", "Caaab");

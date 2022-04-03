function solution(s) {
  s = s.toLowerCase();
  const len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) {
      return "NO";
    }
  }

  return "YES";
}

// solution("goooG");
console.log(solution("gooG"));

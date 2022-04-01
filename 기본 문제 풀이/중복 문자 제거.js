function solution(string) {
  const setString = new Set(string);
  return Array.from(setString).join("");
}

// solution("ksekkset");
console.log(solution("ksekkset"));

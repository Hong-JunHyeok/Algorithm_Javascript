function solution(s) {
  s = s.toLowerCase().replace(/[^a-z]/g, "");

  if (s === s.split("").reverse().join("")) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));

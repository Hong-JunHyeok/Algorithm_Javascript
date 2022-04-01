function solution(string) {
  let answer = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) answer += string[i].toLowerCase();
    else answer += string[i].toUpperCase();
  }

  return answer;
}

// solution("StuDY");
console.log(solution("StuDY"));

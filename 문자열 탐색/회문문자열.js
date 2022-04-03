function solution(str) {
  let answer = "NO";
  str = str.toLowerCase();

  if (str === str.split("").reverse().join("")) {
    answer = "YES";
  }

  console.log(answer);
  return answer;
}

solution("gooG");

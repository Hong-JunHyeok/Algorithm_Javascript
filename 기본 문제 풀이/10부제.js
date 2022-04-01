function solution(날짜, ...차번호들) {
  return 차번호들.filter((차번호) => 날짜 === 차번호 % 10).length;
}

console.log(solution(3, 25, 23, 11, 47, 53, 17, 33));

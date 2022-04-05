function solution(board, moves) {
  const stack = [];
  let answer = 0;

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      let temp;
      if (board[i][pos - 1] !== 0) {
        // 인형을 만난 경우
        temp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (temp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(temp);
        break;
      }
    }
  });

  console.log(answer);

  return answer;
}

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

  return answer;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

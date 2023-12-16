export const sudokuGenerate = () => {
	// create borad 9x9
	const board = Array(9)
		.fill(".")
		.map((_) => Array(9).fill("."));

	// genrate row with random number
	board[0] = arrShuffle(
		Array(9)
			.fill(null)
			.map((_, i) => `${i + 1}`)
	);

	// solve sudoku
	sudokuSolve(board);

	const boardToPlay = removeRandomElements(structuredClone(board), 15);
	const boardSolved = board;

	return {
		boardToPlay,
		boardSolved,
	};
};

const removeRandomElements = (board: Array<Array<string>>, n: number) => {
	const rowRandom = arrShuffle(
		Array(81)
			.fill(null)
			.map((_, i) => i)
	).slice(0, n) as Array<number>;

	for (let v of rowRandom) {
		board[Math.floor(v / 9)][v % 9] = "";
	}

	return board;
};

const sudokuSolve = (board: Array<Array<string>>) => {
	return dfs(board);
};

const dfs = (board: Array<Array<string>>) => {
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === ".") {
				for (let k = 1; k <= 9; k++) {
					if (isValidSudoku(board, i, j, k)) {
						board[i][j] = `${k}`;
						if (dfs(board)) return true;
					}
				}
				board[i][j] = ".";
				return false;
			}
		}
	}

	return true;
};

const isValidSudoku = (
	board: Array<Array<string>>,
	x: number,
	y: number,
	target: number
) => {
	let xx, yy;

	for (let i = 0; i < 9; i++) {
		if (board[x][i] === target.toString()) return false;
		if (board[i][y] === target.toString()) return false;

		xx = 3 * ((x / 3) | 0) + ((i / 3) | 0);
		yy = 3 * ((y / 3) | 0) + (i % 3 | 0);
		if (board[xx][yy] === target.toString()) return false;
	}

	return true;
};

const arrShuffle = (arr: Array<number | string>) => {
	return arr.reduce(
		(newArr, _, i) => {
			var rand = i + Math.floor(Math.random() * (newArr.length - i));
			[newArr[rand], newArr[i]] = [newArr[i], newArr[rand]];
			return newArr;
		},
		[...arr]
	);
};

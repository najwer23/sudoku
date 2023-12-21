interface SudokuBoardType {
	board: SudokuBoardFlatType;
	boardSolved: SudokuBoardFlatType;

	setBoard: (arg: SudokuBoardFlatType) => void;
}

type SudokuBoardFlatType = string[];



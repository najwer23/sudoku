interface SudokuBoardType {
	board: SudokuBoardFlatType;
	setBoard: (arg: SudokuBoardFlatType) => void;
}

type SudokuBoardFlatType = string[];



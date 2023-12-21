import { useState } from "react";
import { sudokuGenerate } from "./Sudoku.helpers"
import { SudokuBoard } from "./SudokuBoard";

export const Sudoku = (): JSX.Element => {
	const sudoku = sudokuGenerate();

	const [board, setBoard] = useState<SudokuBoardFlatType>(sudoku.boardToPlay)
	const [boardSolved, _] = useState<SudokuBoardFlatType>(sudoku.boardSolved)

	return (
		<>
			<SudokuBoard board={board} setBoard={setBoard} boardSolved={boardSolved} />
		</>
	)
}
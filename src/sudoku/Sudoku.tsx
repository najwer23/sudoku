import { useState } from "react";
import { sudokuGenerate } from "./Sudoku.helpers"
import { SudokuBoard } from "./SudokuBoard";
import { ControlButton, TextWrapper } from "./SudokuBoard.styled";

export const Sudoku = (): JSX.Element => {
	const sudoku = sudokuGenerate(15);

	const [board, setBoard] = useState<SudokuBoardFlatType>(sudoku.boardToPlay)
	const [boardSolved, setBoardSolved] = useState<SudokuBoardFlatType>(sudoku.boardSolved)

	const onClickLevel = (n: number) => () => {
		const sudoku = sudokuGenerate(n);
		setBoardSolved(sudoku.boardSolved)
		setBoard(sudoku.boardToPlay)
	}

	return (
		<>
			<TextWrapper><h2>Level</h2></TextWrapper>
			<ControlButton onClick={onClickLevel(15)}>
				Easy
			</ControlButton>
			<ControlButton onClick={onClickLevel(30)}>
				Medium
			</ControlButton>
			<ControlButton onClick={onClickLevel(40)}>
				Hard
			</ControlButton>
			<ControlButton onClick={onClickLevel(70)}>
				I am a robot
			</ControlButton>
			<SudokuBoard board={board} setBoard={setBoard} boardSolved={boardSolved} />

			<TextWrapper><p>https://najwer23.github.io/sudoku</p></TextWrapper>
		</>
	)
}
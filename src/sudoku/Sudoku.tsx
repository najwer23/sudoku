import { sudokuGenerate } from "./Sudoku.helpers"

export const Sudoku = (): JSX.Element => {
	const sudoku = sudokuGenerate();

	console.log(sudoku)

	return (
		<>
			8
		</>
	)
}
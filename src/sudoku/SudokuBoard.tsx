import { useState } from "react"
import { BoardBox, BoardBoxItem, BoardBoxItemValue, BoardBoxItemValueGen, BoardNumber, BoardNumbers, TextWrapper } from "./SudokuBoard.styled"

export const SudokuBoard = ({ board, setBoard }: SudokuBoardType) => {
	const [number, setNumber] = useState(1);

	const onClickBoardItem = (index: number, value: string) => () => {
		const newValue = board.map((v, i) => (i === index) ? "a" + value : v)
		setBoard(newValue)
	}

	const onClikcBoardNumber = (n: number) => () => setNumber(n)

	return (
		<>
			<TextWrapper>
				<h1>Sudoku</h1>
			</TextWrapper>

			<BoardBox>
				{board.map((value, index) => (
					<BoardBoxItem key={"box-item" + index}>
						{value === "" || value.includes("a") ?
							<BoardBoxItemValue key={"box-value" + index} onClick={onClickBoardItem(index, String(number))}
							>{value.slice(1)}
							</BoardBoxItemValue> :
							<BoardBoxItemValueGen key={"box-value" + index}>{value}</BoardBoxItemValueGen>
						}

					</BoardBoxItem>
				))}
			</BoardBox>

			<TextWrapper>
				<p>Chosen Number</p>
			</TextWrapper>

			<BoardNumbers>
				{Array(9)
					.fill(null)
					.map((_, i) => <BoardNumber onClick={onClikcBoardNumber(i + 1)} $active={(i + 1) === number}>{i + 1}
					</BoardNumber>)}
			</BoardNumbers>

		</>
	)
}
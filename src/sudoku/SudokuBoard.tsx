import { useState } from "react"
import { BoardBox, BoardBoxItem, BoardBoxItemValue, BoardBoxItemValueGen, BoardNumber, BoardNumbers, ControlButton, TextWrapper } from "./SudokuBoard.styled"

export const SudokuBoard = ({ board, setBoard, boardSolved }: SudokuBoardType) => {
	const [number, setNumber] = useState(1);
	// 1 - board; 2 - boardSolved;
	const [currentBoard, setCurrentBoard] = useState(1)

	const onClickBoardItem = (index: number, value: string) => () => {
		const newValue = board.map((v, i) => (i === index) ? "a" + value : v)
		setBoard(newValue)
	}

	const onClikcBoardNumber = (n: number) => () => setNumber(n);

	const onClickChangeBoard = () => setCurrentBoard(currentBoard - 1 > 0 ? 1 : 2);

	const onClickReset = () => {
		const newValue = board.map((v, i) => (v.includes("a")) ? "" : v)
		setBoard(newValue)
	}

	return (
		<>
			<TextWrapper>
				<h1>Sudoku</h1>
			</TextWrapper>

			<BoardBox>
				{(currentBoard === 1 ? board : boardSolved).map((value, index) => (
					<BoardBoxItem key={"box-item" + index}>
						{value === "" || value.includes("a") ?
							<BoardBoxItemValue key={"box-value" + index} onClick={onClickBoardItem(index, String(number))}>
								{value.match(/\d+/)?.pop()}
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
					.map((_, i) => <BoardNumber key={i} onClick={onClikcBoardNumber(i + 1)} $active={(i + 1) === number}>{i + 1}
					</BoardNumber>)}
			</BoardNumbers>

			<TextWrapper>
				<p>Controls!</p>
			</TextWrapper>

			<ControlButton onClick={onClickChangeBoard}>
				{(currentBoard === 1 ? "Check" : "Play")}
			</ControlButton>

			<ControlButton onClick={onClickReset}>
				Reset
			</ControlButton>

		</>
	)
}
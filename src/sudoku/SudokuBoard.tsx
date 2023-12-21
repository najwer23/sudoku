import { BoardBox, BoardBoxItem, BoardBoxItemValue } from "./SudokuBoard.styled"

export const SudokuBoard = ({ board, setBoard }: SudokuBoardType) => {

	console.log(board)
	return (
		<BoardBox>
			{board.map((value, index) => (
				<BoardBoxItem key={"box-item" + index}>
					<BoardBoxItemValue key={"box-value" + index}>
						{value === "" ? "" : value}
					</BoardBoxItemValue>
				</BoardBoxItem>

			))}
		</BoardBox>
	)
}
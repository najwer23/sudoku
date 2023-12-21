import styled, { css } from "styled-components";

const item = `calc(11.111111111% - 3.1111111px)`;

export const BoardBox = styled.div`
	width: 90%;
	max-width: 500px;
	display: flex;
	flex-wrap: wrap;
	margin: 10px;
`;

export const BoardBoxItem = styled.div`
	width: calc(${item} + 2px);
	aspect-ratio: 1;
	box-sizing: content-box;
	border-left: 1px solid grey;
	border-top: 1px solid grey;

	-webkit-user-select: none; /* Safari */
	-ms-user-select: none; /* IE 10 and IE 11 */
	user-select: none; /* Standard syntax */

	&:nth-child(9n) {
		width: calc(${item} + 2px);
		border-right: 1px solid grey;
	}

	&:nth-last-child(-n + 9) {
		width: calc(${item} + 2px);
		border-bottom: 1px solid grey;
	}

	&:nth-last-child(-n + 1) {
		width: calc(${item} + 2px);
	}
`;

export const BoardBoxItemValueGen = styled.div`
	background-color: lightgray;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: clamp(1rem, 0.562vw + 0.98rem, 1.35rem);
`;

export const BoardBoxItemValue = styled(BoardBoxItemValueGen)`
	cursor: pointer;
	background-color: white;
`;

export const BoardNumbers = styled.div`
	display: flex;
	gap: 5px;
	margin: 10px;
	flex-wrap: wrap;
`;

export const TextWrapper = styled.div`
	margin: 10px;
`;

export const BoardNumber = styled.div<{ $active: boolean }>`
	height: 50px;
	width: 50px;
	line-height: 50px;
	text-align: center;
	background-color: ${(props) => (props.$active ? "orangered" : "orange")};
	-webkit-user-select: none; /* Safari */
	-ms-user-select: none; /* IE 10 and IE 11 */
	user-select: none; /* Standard syntax */
	cursor: pointer;
`;

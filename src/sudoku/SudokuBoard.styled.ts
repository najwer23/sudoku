import styled, { css } from "styled-components";

export const BoardBox = styled.div`
	width: 280px;
	display: flex;
	flex-wrap: wrap;
	margin: 10px;
`;

export const BoardBoxItem = styled.div`
	width: 31px;
	height: 30px;
	text-align: center;
	line-height: 30px;
	border-left: 1px solid grey;
	border-top: 1px solid grey;
	cursor: pointer;
	-webkit-user-select: none; /* Safari */
	-ms-user-select: none; /* IE 10 and IE 11 */
	user-select: none; /* Standard syntax */

	&:nth-child(9n) {
		width: 32px;
		border-right: 1px solid grey;
	}

	&:nth-last-child(-n + 9) {
		width: 31px;
		border-bottom: 1px solid grey;
	}

	&:nth-last-child(-n + 1) {
		width: 32px;
	}
`;

export const BoardBoxItemValue = styled.div``
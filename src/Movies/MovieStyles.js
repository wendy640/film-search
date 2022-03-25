import styled from 'styled-components'
import header from '../Assets/header.png'
import image from '../Assets/image.png'
export const NavContainer = styled.div`
	box-sizing: border-box;
	overflow: hidden;
	/* position: absolute;
	width: 100%;
	z-index: 1;
	padding: 12px 20px; */
`
export const MovieHeader = styled.div`
	background-image: url(${header});
	padding: 40px 0;
`
export const Border = styled.div`
	width: 193px;
	height: 60px;
	left: 77px;
	top: 40px;
	border: 1px solid #ffffff;
	box-sizing: border-box;
	padding-top: 15px;
	margin-left: 70px;
`

export const Crowd = styled.div`
	background-image: url(${image});
	position: relative;
	width: 1440px;
	height: 550px;
	left: 0px;
	top: -61px;
	h2 {
		height: 282px;
		width: 490px;
		left: 77px;
		top: 87px;
		font-family: DM Sans;
		font-size: 72px;
		font-style: normal;
		font-weight: 700;
		line-height: 94px;
		letter-spacing: -0.05em;
		text-align: left;
		color: #ffffff;

		position: relative;
	}
`
export const Form = styled.div`
	margin: 40px;
	input {
		width: 1306px;
		height: 54px;
		left: 0px;
		top: 35px;

		border: 1px solid #000000;
		box-sizing: border-box;
	}

	h2 {
		text-align: left;
	}
`
export const Box = styled.div`
	/* display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0px;
		color: white;

		width: 300px;
		height: 300px;
		left: 10px;
		top: 0px; */

	/* background: #000000;
		border-radius: 12px; */
	.column {
		float: left;
		width: 10%;
		background-image: url(${header});
		margin: 13px;
		border-radius: 12px;
		padding: 10px;
		color: white;
		width: 300px;
		height: 300px;
	}

	.row:after {
		content: '';
		display: table;
		clear: both;
	}
`

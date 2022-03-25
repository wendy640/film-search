import styled from 'styled-components'
import header from '../Assets/header.png'
import image from '../Assets/image.png'
import box from '../Assets/halfbox.png'
import box1 from '../Assets/box.png'
export const Container = styled.div``
export const NavContainer = styled.div`
	box-sizing: border-box;
	overflow: hidden;
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
	margin-left: 70px;
	input {
		width: 1306px;
		height: 54px;
		left: 0px;
		top: 35px;
		margin-left: -10px;
		border: 1px solid #000000;
		box-sizing: border-box;
	}

	h2 {
		text-align: left;
	}
`
export const Box = styled.div`
	margin-left: -10px;
	margin-right:0px;
	.column {
		width: 300px;
		height: 300px;
		left: 0px;
		top: 0px;
		border-radius: 12px;
		float: left;
		width: 17%;
		margin-left: 10px;
		margin-top: 10px;
		background-image: url(${box1});
	}

	.row:after {
		content: '';
		display: table;
		clear: both;
	}
	h4 {
		padding: 90px 0;
		color: #ffffff;
		font-family: 'DM Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		margin: 30px;
	}
`

import styled from "styled-components";

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
`;

const getImageStyle = (props) => {
	return props.style;
};

export const ImageStyles = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	${getImageStyle}
`;

export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const NameStyles = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const PriceStyle = styled.span`
	width: 10%;
`;

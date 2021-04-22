import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body{
		margin:0;
		padding:0;
		font-family:'Roboto';
		
	}
	h1,h2,h3,h4,h5,h6{margin:0;}
	
`;

export const PageWrapper = styled.div`
	padding:15px 20px;
	height: 150vh;
`;
export const LogoWrapper = styled.div`
    text-align:center;
`;
export const TopLink = styled.div`
    text-align: right;
`;

export const ElementWrapper = styled.div`
	/*display:block;
	width:100%;*/
	border: 1px solid #E3EEFF;
  border-radius: 8px;
	padding: 18px 16px;
	margin:8px 0;

	meter{width:100%;}
`;
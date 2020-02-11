import styled from "styled-components"

export const Button = styled.button`
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;

&:hover{
    background:linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
    background-color:#476e9e;
}
&::active {
	position:relative;
	top:1px;
}

`

export const Input = styled.input`
padding: 5px;
font-size: 16px;
border-width: 3px;
border-color: red;

color: black;
border-style: groove;
border-radius: 19px;


&:focus {
    outline:none;
}
`
export const Card=styled.div`
font-family: Georgia, serif;
font-size: 19px;
letter-spacing: 2px;
word-spacing: 2px;
text-align:center;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
border: 5px outset #1C6EA4;
border-radius: 40px 40px 40px 40px;
width:25%;
margin-left:38%;
margin-top:3%;
-webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);



`

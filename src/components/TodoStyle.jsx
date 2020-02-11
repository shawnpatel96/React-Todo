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


import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { StyledButtonType } from "./types";

export const Container = styled(TouchableOpacity)<StyledButtonType>`
width : 200px;    
height : 60px;
background-color : #AB00F2;
border-radius: 10px;
justify-content : center;
align-items : center;

`;

export const StyledText = styled(Text)<StyledButtonType>`

color: white;
`;
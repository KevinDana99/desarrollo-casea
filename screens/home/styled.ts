import { View } from "react-native";
import { Image, Text as CustomText } from "react-native-elements";
import styled from "styled-components";

export const Container = styled(View)`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

`;

export const Img = styled(Image)`
width: 400px;
height: 200px;

`;

export const Text = styled(CustomText)`

font-size: 15px;
font-weight: 300;
text-align: center;
color: #191919;
`;

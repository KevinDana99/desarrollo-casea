import React, {useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet, Image} from "react-native";
import Nav from "../nav/Nav";
import * as WebBrowser from "expo-web-browser";
import * as RootNavigation from './../../models/navigator/RootNavigation';
import { Container, Img } from "./styled";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

function Home(){


return (
    

<Container>
    
<Nav/>
   
<Img source={require('../../assets/home.png')}></Img>

<Text >Encuentra la casa de tus sueños</Text>

<PrimaryButton title="Buscar propiedades"/>

<TouchableOpacity 
onPress={()=>{WebBrowser.openBrowserAsync('https://api.whatsapp.com/send?phone=542805062685&text=Hola%2C%20quiero%20hacer%20una%20consulta.')}}>
    <Text style={{color:'grey'}}>Powered By AION Developers</Text></TouchableOpacity>

</Container>


)
}



export default Home;
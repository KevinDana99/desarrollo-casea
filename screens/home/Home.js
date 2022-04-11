import React, {useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet, Image} from "react-native";
import Nav from "../nav/Nav";
import * as WebBrowser from "expo-web-browser";
import * as RootNavigation from './../../models/navigator/RootNavigation';

function Home(){


return (
    

<View style={style.container}>
    
<Nav/>
   
<Image style={style.img} source={require('../../assets/home.png')}></Image>

<Text style={style.text}>Encuentra la casa de tus sueños</Text>

<TouchableOpacity style={style.button} onPress={ () => {RootNavigation.navigate('Welcome')}}><Text style={style.textButton}>Empezar</Text></TouchableOpacity>

<TouchableOpacity onPress={()=>{WebBrowser.openBrowserAsync('https://api.whatsapp.com/send?phone=542805062685&text=Hola%2C%20quiero%20hacer%20una%20consulta.')}}><Text style={{color:'grey'}}>Powered By AION Developers</Text></TouchableOpacity>

</View>


)
}

const style = StyleSheet.create({

container : {
 width : '100%',
 flex : 1,
 justifyContent : 'space-between',
 alignItems : 'center'

},   

img : {

width : 400,
height : 220

},

text : {

fontSize : 25,
fontWeight : '300',
textAlign : 'center',
color : '#191919'

},

button : {

width : 200,    
height : 60,
backgroundColor : '#AB00F2',
borderRadius: 10,
color : 'white',
justifyContent : 'center',
alignItems : 'center'

},

textButton : {

color : 'white',


}

});

export default Home;
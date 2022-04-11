import {View,Text,TouchableOpacity,StyleSheet, Image} from "react-native";

const style = StyleSheet.create({

    welcome : {
    
    flex: 1,
    backgroundColor : '#AB00F2',
    justifyContent : 'space-around',
    alignItems : 'center',
    
    },
    
    title : {
    height : 100,
    fontSize : 60,
    fontWeight : '600',
    color : '#FFFFFF',
    
    },
    
    subtitle : {
    height : 50,
    fontSize : 25,
    color : '#FFFFFF',
    },
    
    button : {
    
    width : 300,
    height : 90,
    backgroundColor : '#ffffff',
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center'
    
    },
    
    button_text : {
    
    color : '#AB00F2',
    fontSize : 22,
    },
form : {

width : 350,
height : 200,
justifyContent : 'space-between',
alignItems : 'center',
    },

 input : {
padding : 10,
width : 350,
height : 70,
backgroundColor : '#ffffff'

    }
    
    }) 

    export default style;


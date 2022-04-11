import React, {useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet, Image} from "react-native";
import questions from './Questions';
import style from './Welcome.styles';


const Welcome = () => {

    const [state, setState] = useState({
        stage : 0,
        preference : 0,
        title : "Bienvenido", 
        subtitle : "¿que deseas?",
        options : [
        
    <TouchableOpacity onPress={()=>{ next(1)}} style={style.button}><Text style={style.button_text}>¡Quiero comprar!</Text></TouchableOpacity>,
    <TouchableOpacity onPress={()=>{ next(2)}} style={style.button}><Text style={style.button_text}>¡Quiero vender!</Text></TouchableOpacity>
            
            ]

    });


const next = (prop) => {


const preference = state.preference == 0 ? prop : state.preference;

    const stages = state.stage +1;

    setState({...questions[preference][stages], preference});

}

    return (

<View style={style.welcome}>

    <Text style={style.title}>{state.title}</Text> 

    <Text style={style.subtitle}>{state.subtitle}</Text>



{state.options.map(e=> {

return e;

})}

{state.preference != 0 && <TouchableOpacity onPress={()=> {next()}} style={style.button}><Text style={style.button_text}>Siguiente</Text></TouchableOpacity>}

</View>
  
    )
}


export default Welcome;

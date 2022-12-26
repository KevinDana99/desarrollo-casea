import React, {useState} from 'react'
import {View,Text,TouchableOpacity,StyleSheet, Image} from "react-native";
import {FontAwesome } from '@expo/vector-icons';
import * as RootNavigation from './../../models/navigator/RootNavigation';

const Nav = () => {

    const [nav, setNav] = useState({});

const target = (target) => {

setNav(target)

RootNavigation.navigate('Search', {target})
}

    return(

        <View style={style.nav}>
        
        <View style={style.nav_left}>
 <TouchableOpacity onPress={()=>{target('alquiler')}} style={style.button_nav}><Text style={style.button_nav_text}>Alquileres</Text></TouchableOpacity>
    
 <TouchableOpacity onPress={()=>{target('inmobil')}} style={style.button_nav}><Text style={style.button_nav_text}>Inmuebles</Text></TouchableOpacity>

 <TouchableOpacity onPress={()=>{target('other')}} style={style.button_nav}><Text style={style.button_nav_text}>Other</Text></TouchableOpacity>
 </View>

<TouchableOpacity onPress={()=>{target('filter')}}>
<FontAwesome style={style.ico} name="filter"></FontAwesome>
</TouchableOpacity>

    </View>
    )
}

export default Nav

const style = StyleSheet.create({


    nav : {
        width : '100%',
        height : 50,
        backgroundColor : '#a808ecff',
        flexDirection : 'row',
        padding : '2%',
        justifyContent : 'space-between',
        alignItems : 'center',
        color : 'white',
        
        },
        
        
        nav_left : {
            width : 300,
            flexDirection : 'row',
         
        
            },
        
        button_nav : {
        marginRight : 5,
        width : 120,
        borderRadius : 10,
        height : 40,
        backgroundColor : '#8e02ca',
        color : '#ffffff',
        justifyContent : 'center',
        alignItems : 'center'
        
        },
        
        button_nav_text : {
        
            color : '#ffffff',
        
            },
        
            ico : {
        
                color : '#ffffff',
                fontSize : 20
            
                },  
        

})

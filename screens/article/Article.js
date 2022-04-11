import React from "react";
import {View,Text, StyleSheet, ScrollView,Image} from "react-native";
import {FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";

function Article({route,navigation}){

if (route.params){

console.log(route.params.articulo)

return (

<View style={style.container}>

    <ScrollView>

<View style={style.card}>
<Text style={style.title}>{route.params.articulo.item}</Text>
<Image style={style.image} source={{uri: route.params.articulo.imagen}}></Image>
<View style={style.description}>
    <View style={style.rooms}>  
    <FontAwesome style={style.icons} name="map-marker" size={32} color="#AB00F2"/>
    <Text>{route.params.articulo.ubicacion}</Text>
    </View> 
    <View style={style.rooms}>
    <FontAwesome5 style={style.icons} name="layer-group" size={23} color="#AB00F2"/>
    <Text>{route.params.articulo.divisiones}</Text>
    </View>
</View>
<TouchableOpacity style={style.boton} onPress={()=>{WebBrowser.openBrowserAsync('https://api.whatsapp.com/send?phone=542805062685&text=Hola%2C%20quiero%20hacer%20una%20consulta.')}}><Text style={style.textBoton}>Contactar</Text></TouchableOpacity>
</View>

<View style={style.card2}>
<Text style={style.title}>Requisitos</Text>
<View style={style.rooms}>
    <FontAwesome style={style.icons} name="file" size={23} color="#AB00F2"/>
    <Text>Recibo de sueldo mayor a $20.000</Text>
    </View>
    <View style={style.rooms}>
    <FontAwesome5 style={style.icons} name="user-check" size={23} color="#AB00F2"/>
    <Text>2 Garantes</Text>
    </View>
    <View style={style.rooms}>
    <FontAwesome5 style={style.icons} name="users" size={23} color="#AB00F2"/>
    <Text>4 Personas</Text>
    </View>
    <View style={style.rooms}>
    <FontAwesome style={style.icons} name="paw" size={23} color="#AB00F2"/>
    <Text>Se aceptan mascotas</Text>
    </View>

    <View style={style.rooms}>
    <MaterialCommunityIcons style={style.icons} name="clock" size={23} color="#AB00F2"/>
    <Text>Contrato por 2 años</Text>
    </View>
</View>

<View style={style.card3}>
<Text style={style.title}>Descripcion</Text>
<Text style={style.textDesc}>{route.params.articulo.desc}</Text>
</View>
 

    </ScrollView>
    
    </View>    
    )
    
}else {

    return (

<Text>No definido</Text>
    )

}

}

const style = StyleSheet.create({

container : {
width : '100%',
alignItems : 'center'


},

card : {
    
    width : 400,
    height : 600,
    marginTop : 10,
    marginBottom : 10,
    backgroundColor : 'white',
    alignItems : 'center',
    justifyContent : 'space-around'
 
},

card2 : {
    
    width : 400,
    minHeight : 500,
    marginTop : 10,
    marginBottom : 10,
    backgroundColor : 'white',
    alignItems : 'center',
    justifyContent : 'space-around'
 
},

card3 : {
    paddingTop : 40,
    width : 400,
    height : 'auto',
    marginTop : 10,
    marginBottom : 10,
    backgroundColor : 'white',
    alignItems : 'center',
    justifyContent : 'flex-start'
 
},

title : {
    fontSize : 32,
    color : '#AB00F2',
    
},

image : {

    width : 350,
    height : 280
    
    },

    description : {

        width : 200,
        height : 80,
        alignItems: 'center',
        justifyContent : 'flex-end',

        
        },
        
        rooms: {
        width : 300,
        height: 40,
         flexDirection : 'row',
         justifyContent : 'flex-start',
         alignItems : 'center'
        },
        
        icons : {
        
        marginLeft : 5,
        marginRight : 5
        
        },
        
        precio : {
        position : 'absolute',
        bottom : 0,
        width : 250,
        height : 40,
        backgroundColor : 'black',
        opacity : 0.7,
        alignItems : 'flex-end',
        justifyContent : 'center'
        
        },
        
        precioTexto: {
        
           color : 'white',
           fontSize : 20,
           marginRight : 10
        
        },

        boton : {

        width : 200,
        height : 60,
        backgroundColor : '#AB00F2',
        borderRadius : 7,
   
        justifyContent : 'center',
         alignItems : 'center'
   
        },

        textBoton : {
            color : 'white',
            fontSize : 20,
        },

        textDesc : {
            padding : 20,
            minHeight: 200,
            fontSize : 16, 
            marginTop : 30,
            color : '#3a3a3a'

        }
    


});

export default Article;
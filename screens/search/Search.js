import React, {useEffect, useState } from "react";
import {View,Text, FlatList, StyleSheet, Image, Button} from "react-native";
import {FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Nav from "../nav/Nav";


function Search ({route,navigation}){

if (route.params){


const [options,setOptions] = useState({


});    

let [data, setData] = useState([]);


async function consulta() {
    console.log(route.params.query)

setOptions({query : route.params.query, target : route.params.target})

    const consulta = await fetch('http://192.168.0.8/app_casea/backend/server.php?search=' + route.params.query);
    const respuesta = await consulta.text()


    console.log(respuesta);


const substraido = respuesta.substr(0,respuesta.length - 2) + ']';
const json = JSON.parse(substraido);


setData(json);

}

useEffect(() => {

    consulta();
    
    
console.log(options)

},[]);


    return (

        <View>

<Nav/>
<FlatList data={data} renderItem={({item}) => {

console.log(item.imagen);

return <View style={style.container}>
 
    <View style={style.card}>
    <Text style={style.title}>{item.item}</Text>
    <View>
    <Image style={style.image} source={{uri : item.imagen}}></Image>
    <View style={style.precio}><Text style={style.precioTexto}>${item.precio}</Text></View>
    </View>
    <View style={style.description}>
    <View style={style.rooms}>  
    <FontAwesome style={style.icons} name="map-marker" size={32} color="#AB00F2"/>
    <Text>{item.ubicacion}</Text>
    </View> 
    <View style={style.rooms}>
    <FontAwesome5 style={style.icons} name="layer-group" size={23} color="#AB00F2"/>
    <Text>{item.divisiones}</Text>
    </View>
    </View>
    <Button onPress={()=> {navigation.navigate('Article',{articulo : item})}} title="Ver mas" color="#AB00F2"></Button>
    </View>
    </View>

    
}}/>

        </View>


    ) 

}else {

 return (

    <View>
  <Nav/>

    </View>
 )   
}

}

const style = StyleSheet.create({

container : {

flex : 1,
 justifyContent : 'space-around',
 alignItems : 'center'


},

card : {

  width : 300,
  height : 450,
  backgroundColor : 'white',
  justifyContent : 'space-around',
  alignItems : "center",
  marginTop : 10,
  marginBottom : 20,
  borderRadius : 15
    
},

title : {

fontSize : 25,
color : '#AB00F2'
},

image : {

width : 250,
height : 200

},

description : {

width : 200,
height : 80,
alignItems: 'center',
justifyContent : 'flex-end',


},

rooms: {
width : 200,
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

}

});

export default Search;
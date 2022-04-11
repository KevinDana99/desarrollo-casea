import React, {useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet, Image, } from "react-native";
import { Input} from 'react-native-elements';
import style from './Welcome.styles';

 const questions = {


1 : {

1 : { 
   stage : 1,
   title : "Paso 1",
    subtitle : "Introduce un email", 
    
    options : [

<View style={style.form}>

        <Input style={style.input}></Input>
 
        
        </View>  
        
        ]


},


2 : { 
    stage : 2,
    title : "Paso 2",
    subtitle : "Elige una contraseña segura", 
    
    options : [
        <View style={style.form}>

        <Input keyboardType="visible-password" style={style.input}></Input>
    
        
        </View>  
        
        ]



},


3 : { 
    stage : 3,
    title : "Paso 3",
    subtitle : "Selecciona tu pais", 
    
    options : [
        <View style={style.form}>

<Input keyboardType="default" style={style.input}></Input>

    <Text style={style.subtitle}>Selecciona una provincia</Text> 
   
   <Input keyboardType="default" style={style.input}></Input>

   <Text style={style.subtitle}>Selecciona una ciudad</Text> 
   
   <Input keyboardType="default" style={style.input}></Input>
        </View>  
        
        ]



}



    
},

2: {

    1 : { 
        stage : 1,
        title : "Paso 1",
         subtitle : "Introduce un email", 
         
         options : [
     
     <View style={style.form}>
     
             <Input style={style.input}></Input>
      
             
             </View>  
             
             ]
     

    },
    
    
    2 : { 
    
        stage : 2,
    title : "Paso 2",
    subtitle : "Elige una contraseña segura", 
    
    options : [
        <View style={style.form}>

        <Input keyboardType="visible-password" style={style.input}></Input>
    
        
        </View>  
        
        ]


    
    },

    3 : {

        stage : 3,
        title : "Paso 3",
        subtitle : "Selecciona tu pais", 
        
        options : [
            <View style={style.form}>
    
    <Input keyboardType="default" style={style.input}></Input>
    
        <Text style={style.subtitle}>Selecciona una provincia</Text> 
       
       <Input keyboardType="default" style={style.input}></Input>
    
       <Text style={style.subtitle}>Selecciona una ciudad</Text> 
       
       <Input keyboardType="default" style={style.input}></Input>
            </View>  
        ]    

    },

    4 : { 
        stage : 4,
        title : "Paso 4",
         subtitle : "Vende o alquila tu inmueble", 
         
         options : [
     
     <View style={style.form}>
     
             <Input style={style.input}></Input>
      
             
             </View>  
             
             ]
     
    
    }
    


},


    
    }

    


export default questions;
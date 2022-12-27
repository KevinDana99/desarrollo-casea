import React, { cloneElement } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesome } from '@expo/vector-icons';
import {View, StyleSheet,Text,TextInput, TouchableOpacity } from 'react-native';

import Home from '../../screens/home/Home';
import Search from '../../screens/search/Search';
import Article from '../../screens/article/Article';

import * as RootNavigation from './RootNavigation';

const Stack = createStackNavigator();
let busqueda = 0;

export default function MyStack(){

const headerSettingHome = {headerTintColor : 'white',headerStyle: {backgroundColor: '#AB00F2'},

headerRight : ()=>(

<View style={{flexDirection: 'row'}}>
<FontAwesome style={styles.icoRight} onPress={()=> {RootNavigation.navigate('Search')}} name="search" size={24} color="white" />
</View>
),

headerLeft : ()=>(

    <View>
    <FontAwesome style={styles.icoLeft} name="home" size={35} color="white" />
    </View>
    ),



}

const headerSettingSearch =  {title : '', headerTintColor : 'white',headerStyle: {backgroundColor: '#AB00F2'},

headerRight : ()=>(

<View style={styles.finder}>
<View style={styles.inputItem}>
<TextInput  style={styles.input} onChangeText={(e)=>{busqueda=e;RootNavigation.navigate('Search',{query : busqueda})}} placeholder="Escribe tu busqueda" placeholderTextColor="lightgrey"></TextInput><FontAwesome style={styles.icoRight} onPress={()=> {alert('hello')}} name="search" size={24} color="white" />

</View>

</View>
)
}

const headerSettingArticle = {title : 'Articulo',headerTintColor : 'white',headerStyle: {backgroundColor: '#AB00F2'},

headerRight : ()=>(

<View>
<FontAwesome style={styles.icoRight} onPress={()=> {RootNavigation.navigate('Search')}} name="search" size={24} color="white" />

</View>
)

}

return (


<Stack.Navigator>

<Stack.Screen  options={headerSettingHome} name="Casea" component={Home} />
<Stack.Screen  options={headerSettingSearch} name="Search" component={Search}/>
<Stack.Screen  options={headerSettingArticle} name="Article" component={Article}/>

</Stack.Navigator>


);

}

const styles = StyleSheet.create({

//style generals

    icoLeft : {
    
    marginLeft : 10,
    },
    
    icoRight : {
    
      color : 'white',
      marginRight : 10
    
    },

    //finder

    finder : {

     width : 345,
     height : 60,
     flex:1,
     flexDirection : 'row',
     justifyContent : 'center',
     alignItems : 'center',

    },

    inputItem : {
        width : 320,
        height : 40,
        backgroundColor : '#8800C1',
        borderRadius : 7,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
        

     },

     input : {
    width : 280,
    height : 60,
    fontSize : 16,
    color : 'white',
    paddingLeft : 10

     }
    
    });
    
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Article from './../../screens/article/Article';
import Home from './../../screens/home/Home';
import Search from './../../screens/search/Search'
import Welcome from './../../screens/welcome/Welcome';

const Tabs = () => {

return (

<Tab.Navigator>

<Tab.Screen name='Article' component={Article}/>
<Tab.Screen name='Home' component={Home}/>
<Tab.Screen name='Search' component={Search}/>
<Tab.Screen name='Welcome' component={Welcome}/>

</Tab.Navigator>

);

}

export default Tabs;
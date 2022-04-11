import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './models/navigator/Navigator';

import { navigationRef } from './models/navigator/RootNavigation';


export default function App() {
  return (


<NavigationContainer ref={navigationRef}>

<MyStack/>

</NavigationContainer>


  );
}


import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Dashboard from '../src/container/Dashboard'
import Detail from '../src/container/Detail'

const Stack = createStackNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen 
          name={"Dashboard"} 
          component={Dashboard} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name={"Detail"} 
          component={Detail} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { GetStarted } from '../screens/GetStarted'
import { BottomNavigator } from './BottomNavigator'
import { Details } from '../screens/Details'
import { CompleteOrder } from '../screens/CompleteOrder'

const Stack = createNativeStackNavigator()

export function StackNavigator(){
  return(
    <Stack.Navigator
      screenOptions={{ 
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='GetStarted'
        component={GetStarted}
      />
      <Stack.Screen
        name='BottomNavigator'
        component={BottomNavigator}
      />
      <Stack.Screen
        name='Details'
        component={Details}
      />
      <Stack.Screen
        name='CompleteOrder'
        component={CompleteOrder}
      />
    </Stack.Navigator>
  )
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { Cart } from '../screens/Cart'

const Tab = createBottomTabNavigator()

export function BottomNavigator(){
  return(
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false,
        paddingBottom: '10px',
        paddingTop: '5px'
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: () => 
          <AntDesign 
            name='home'
            size={20}
            color='green.600'     
          />
        }}
      />
      <Tab.Screen
        name='Cart'
        component={Cart}
        options={{
          tabBarIcon: () => 
          <AntDesign 
            name='shoppingcart'
            size={20}
            color='green.600' 
          />
        }}
      />
    </Tab.Navigator>
  )
}

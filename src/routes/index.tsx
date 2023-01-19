import { NavigationContainer } from '@react-navigation/native'

import { BottomNavigator } from './BottomNavigator'
import { StackNavigator } from './StackNavigator'

export function Routes(){
  return(
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

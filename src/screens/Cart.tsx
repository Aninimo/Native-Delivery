import { 
  ScrollView,
  Text,
  VStack,
  Box,
  Flex } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'

import { CardCartFood } from '../components/CardCartFood'
import { Button } from '../components/Button'

export function Cart({ navigation }){
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart.cart)
  const total = cart
      .map((item) => item.price * item.quantity)
      .reduce((curr, prev) => curr + prev, 0)

  return(
    <ScrollView>
      <VStack flex={1} p='10px'>
        <Text 
          bold
          color='green.600'
          mb='15px'
          fontSize='24px'
        >
          Your cart
        </Text>    
          {cart.map((item, index) => (
            <>
              <CardCartFood
                food={item}
              />
             
            </>
          ))}
          <Flex>
            <Text
              bold
            >
              Total: {total} 
            </Text>
        </Flex>
        <Button
          title='Checkout'
          variant='bgGreen'
          onPress={() => navigation.navigate('CompleteOrder')}
        />
      </VStack>
    </ScrollView>
  )
}

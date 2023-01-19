import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { 
  Box,
  Text,
  IconButton,
  Center,
  Flex } from 'native-base'
import { Feather } from '@expo/vector-icons'

import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartReducer'

export interface CardFoodProps{
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface Props{
  food: CardFoodProps;
  onPress: () => void;
}

export function CardFood({ food, onPress }: Props){
 const dispatch = useDispatch() 

 const addItemToCart = (food) => {
   dispatch(addToCart(food));
 }

  return(
    <TouchableOpacity onPress={onPress}>
      <Box
        w='150px'
        h='180px'
        p='10px'
        rounded='lg'
        shadow='9'
      >
        <Center>
         <img 
           src={food.image}
           width='60px'
           height='60px'
         />
         <Text
           mt='10px'
           mb='30px' 
         >
           {food.name}
          </Text>
          <Flex
            w='100%'
            direction='row'
            align='center'
            justify='space-between'
          >
            <Text>{food.price}</Text>
            <IconButton
              _icon={{
                as: Feather,
                name: 'shopping-cart',
                size: '16px',
                color: 'yellow.500'
              }}
              bg='green.500'
              onPress={() => addItemToCart(food)}
            />
          </Flex> 
        </Center>
      </Box>
    </TouchableOpacity>
  )
}

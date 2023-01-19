import { 
  Box,
  Text,
  IconButton,
  Flex } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { Feather } from '@expo/vector-icons'

import { CardFoodProps } from './CardFood'

import { decrementQuantity,
  incrementQuantity, removeFromCart } from '../redux/CartReducer'

interface CardCartFoodProps{
  food: CardFoodProps;
}

export function CardCartFood({ food }: CardCartFoodProps){
  const dispatch = useDispatch()

  const increaseQuantity = (food) => {
    dispatch(incrementQuantity(food));
  }

  const decreaseQuantity = (food) => {
    if(food.quantity == 1){
      dispatch(removeFromCart(food));
    }else{
      dispatch(decrementQuantity(food));
    }
  }

  const removeItemFromCart = (food) => {
    dispatch(removeFromCart(food))
  }
  
  return( 
    <Box
      w='290px'
      h='80px'
      p='10px'
      shadow='9'
      rounded='lg'
      mb='20px' 
    >
      <Flex
        direction='row'
        align='center'
        gap='20px'
      >
        <img 
          src={food.image}
          width='60px'
          height='60px'  
        />
        <Box>
          <Text>{food.name}</Text>
          <Flex
            direction='row'
            align='center'
            gap='7px'
          >
            <Text>${food.price}</Text>    
            <Text>x{food.quantity}</Text>
            <Box>
              <Flex
                direction='row'
                align='center'   
                ml='10px'
              >
                <IconButton
                  _icon={{
                    as: Feather,
                    name: 'plus',
                    size: '14px',
                    color: 'yellow.500'
                  }}
                  w='30px'
                  h='30px'
                  bg='green.500'
                  onPress={() => increaseQuantity(food)}
                />
                <IconButton
                   _icon={{
                     as: Feather,
                     name: 'minus',
                     size: '14px',
                     color: 'yellow.500'
                   }} 
                   w='30px'
                   h='30px'
                   bg='green.500'
                   onPress={() => decreaseQuantity(food)}/>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <IconButton
        _icon={{
          as: Feather,
          name: 'trash-2',
          color: '#FFF',
          size: '16px'
        }}
        w='35px'
        h='35px'
        ml='245px'
        mt='-25px'
        bg='red.500'
        onPress={() => removeItemFromCart(food)}
      />
    </Box>
  )
}

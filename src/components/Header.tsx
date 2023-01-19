import { Flex, Pressable, Text, Image } from 'native-base'
import { Feather } from '@expo/vector-icons'

export function Header({ logo, photo, back, onPress }){
  return(
    <>
      {back ? (
        <Flex>
          <Pressable onPress={onPress}>
            <Feather 
              name='chevron-left'
              color='#FFF'
              size={24}
            />
          </Pressable>        
        </Flex>
      ) : (
        <Flex
          direction='row'
          align='center'
          justify='space-between'
          p='10px'
        >
          <Text
            bold
            fontSize='24px'
            color='green.600'
          >
            Native {'\n'}
            Delivery
          </Text>
          <Image
            source={{
              uri: 'https://github.com/Aninimo.png'
            }}
            size='60px'
            rounded='full'
          />
        </Flex>
      )}
    </>
  )
}

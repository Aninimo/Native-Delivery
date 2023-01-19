import { 
  View,
  Text,
  Center,
  Image } from 'native-base'

export function CompleteOrder(){
  return(
    <View
      w='100%'
      h='100%'
      bg='green.500'
    >
      <Center>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/ameenfarook/food_delivery_app/main/src/assets/images/deliver.png'
          }}
          size='200px'
          mt='50px'
          mb='40px'
        />
        <Text
          color='#FFF'
          fontSize='28px'
        >
          Your order is on its way, {'\n'} thank you!
        </Text>
      </Center>
    </View>
  )
}

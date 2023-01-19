import { 
  View,
  Center,
  Image,
  Text,
  Button } from 'native-base'

export function GetStarted({ navigation }){
  return(
    <View
      w='100%'
      h='100%'
      bg='green.500'
    >
      <Center>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/ameenfarook/food_delivery_app/main/src/assets/images/plate.png'
          }}
          size={250}
          mt='30px'
        />
        <Text
          color='#FFF'
          mt='20px'
          fontSize='30px'
        >
          Grab Your {'\n'}
          Delicios food!
        </Text>
        <Button
          w='300px'
          h='50px'
          bg='yellow.600'
          mt='20px'
          onPress={() => navigation.replace('BottomNavigator')}
        >
          Get started
        </Button>  
      </Center>
    </View>
  )
}

import { 
  View,
  Text,
  Box,
  Center,
  Flex,
  ScrollView } from 'native-base'
import { Header } from '../components/Header'

export function Details({ navigation, route }){
  const dataParams = route.params 
  
  return(
    <View>
    <Box
      bg='green.500'
      p='10px'
    >
    <Header back onPress={() => navigation.goBack()}/>
      <Center>
        <img 
          src={dataParams.image}
          width='120px'
        />
      </Center>
    </Box>
    <Box
      p='10px'
    >
      <Text bold fontSize='24px'>
        {dataParams.name}
      </Text>
      <Text
        mb='15px'
      >
        {dataParams.description}
      </Text>
      <Text
        bold
      >
        Ingredients
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {dataParams.ingredients.map((ingredient) => (
           <Box
             w='auto'
             h='40px'
             p='10px'
             bg='green.500'
             rounded='lg'
             ml='10px'
           >
             <Text
              color='#FFF'
             >
               {ingredient}
              </Text>
           </Box>
          ))}
        </ScrollView>
          <Flex
            direction='row'
            align='center'
            gap='20px'
            mt='30px'
          >
          <Text
            bold
            fontSize='20px'
          >
            Price:
          </Text>
            <Text>
              ${dataParams.price}
            </Text>        
         </Flex>
        </Box>
    </View>
  )
}

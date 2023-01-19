import { Box, Flex, Text, Image } from 'native-base'

export function BoxInfo(){
  return(
    <Box
      w='250px'
      h='100px'
      rounded='lg'
      bg='green.600'
      mt='20px'
      mb='20px'
      p='10px'
    >
      <Flex
        direction='row'
        align='center'
        gap='30px'
      >
        <Text
          color='#FFF'
          bold
          fontSize='18px'
        >
          Enjoy our services
        </Text>     
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/ameenfarook/food_delivery_app/main/src/assets/images/deliver.png'
          }}
          size='80px'
        />
      </Flex>
    </Box>
  )
}

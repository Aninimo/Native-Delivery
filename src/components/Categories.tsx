import { Box, Text, Center, Pressable } from 'native-base'
import { TouchableOpacity } from 'react-native'

interface CategoriesProps{
  name: string;
  icon: string;
  active: boolean;
  onPress: () => void;
}

export function Categories({ 
  activeCategory, 
  setActiveCategory,
  name,
  icon,
  active,
  onPress }: CategoriesProps){
  return(
     <Pressable onPress={() => setActiveCategory(name)}>
       <Box
         w='100px'
         h='110px'
         p='10px'
         borderColor='black'
         borderWidth='1'
         rounded='lg'
         ml='10px'
       >
         <Center>
           <Text
             fontSize='30px'
           >
             {icon}
           </Text>
           <Text
             mt='8px'
           >
             {name}
           </Text>      
         </Center>
       </Box>
    </Pressable>
  )
}

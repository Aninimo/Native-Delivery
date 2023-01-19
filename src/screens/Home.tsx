import { useState } from 'react'
import { 
  ScrollView,
  VStack,
  Text,
  Center,
  Flex } from 'native-base'

import { Header } from '../components/Header'
import { BoxInfo } from '../components/BoxInfo'
import { Categories } from '../components/Categories'
import { CardFood } from '../components/CardFood'

import { foods } from '../data/foods'
import { categories } from '../data/categories'

export function Home({ navigation }){
  const [activeCategory, setActiveCategory] = useState()
  return(
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} p>
        <Header/>
        <Center>
          <BoxInfo/>
        </Center>
        <Text
          bold
          color='green.600'
          ml='20px'
          mb='10px'
        >
              Categories
            </Text>          
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}                      
          >
            {categories.map((category) => (
              <>
                <Categories
                  icon={category.icon}
                  name={category.name}
                />
               </>
              ))}
            </ScrollView>
             <Text
               bold
               color='green.600'
               ml='20px'
               mb='10px'
               mt='-170px'
             >
               Popular food
             </Text>
          <Flex
            flex='1'
            wrap='wrap'
            direction='row'
            justify='center'
            gap='20pxl'
          >
            {foods.map((food) => (
              <>
                <CardFood
                  food={food}
                  onPress={() => navigation.navigate('Details', food)}
                />
              </>
            ))}
          </Flex>
      </VStack>
    </ScrollView>
  )
}

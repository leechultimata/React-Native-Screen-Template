import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='cardList' component={CardListScreen}></Stack.Screen>
          <Stack.Screen name='card' component={CardScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

function CardListScreen({navigation}){
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {navigation.navigate('card', {id:1})}}>
        <Text>Card 1</Text>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('card', {id:2})}}>
        <Text>Card 2</Text>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('card', {id:3})}}>
        <Text>Card not found</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  )
}

const cards = [
  {
    id: 1,
    title: 'Карточка номер 1',
    text: 'Это текст для карточки номер 1'
  },
  {
    id: 2,
    title: 'Вторая карточка',
    text: 'Другой текст уже для второй карточки'
  },
]

function CardScreen({route}){
  const {id} = route.params
  const filteredCards = cards.filter( card => card.id === id ) 
  let title = '404'
  let text = 'Карточка не найдена'
  if( filteredCards.length > 0 ){
    const card = filteredCards[0]
    title = card.title
    text = card.text
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30}}>{title}</Text>
      <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

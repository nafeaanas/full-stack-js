import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home'
import Play from './screens/play'
import PlayList  from './screens/playList';
import StateProvider from './utils/StateProvider'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <StateProvider>
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Play" component={Play} options={{ headerShown: false }} />
        <Stack.Screen name='Playlist' component={PlayList} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </StateProvider>
  )
}

export default App
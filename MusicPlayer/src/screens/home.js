import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Home = ({navigation}) => {
  return (
    <View style={styles.home}>
      <View style={styles.img}>
      </View>
      <Image
        style={[styles.flow, {width: '100%', height: 150}]}
        source={require('../assets/images/Logo.png')}
      />
      <View style={styles.getstarted}>
        <Text style={[styles.text, {fontSize: 35, fontWeight: 'bold'}]}>
          Music app
        </Text>
        <Text style={[styles.text, {fontSize: 18, fontWeight: '100'}]}>
          the best music in thr world 
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Playlist')}>
          <Text style={styles.textButton}>Start</Text>
          <AntDesign style={{marginLeft:6}} name="right" color="white" size={18}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },

  getstarted: {
    alignItems: 'center',
    marginTop: '20%',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    marginTop: '10%',
    backgroundColor: '#42C83C',
    width: 160,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent:"center",
    flexDirection:"row"
  },
  textButton: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 300,
  },
  flow: {
    marginTop: 90,
    bottom: 0,
  },
});

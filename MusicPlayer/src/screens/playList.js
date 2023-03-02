import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Pressable,
    Platform,
    Alert,
    PermissionsAndroid,
    FlatList,
  } from 'react-native';
  import React, {useEffect, useState, useContext} from 'react';
  
  import RNFS from 'react-native-fs';
  import {StateGlobal} from '../utils/StateProvider';
  import TrackPlayer from 'react-native-track-player';
  
  const PlayList = ({navigation}) => {
    const {requestFileSystemPermission, getSongs, audioFiles} =
      useContext(StateGlobal);
  
    useEffect(() => {
      requestFileSystemPermission();
      getSongs();
      TrackPlayer.setupPlayer();
      console.log(audioFiles);
    }, []);
    return (
      <>
        <Image
          style={styles.flowleft}
          source={require('../assets/images/Left 2.png')}
        />
        <View style={styles.musicsscreen}>
          <View style={styles.recently}>
            <View style={styles.recentlyOption}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}>
                recently played
              </Text>
              <Text style={{color: 'black'}}>See All</Text>
            </View>
            <View style={styles.recentlyMusic}>
              <View>
                <Image
                  style={styles.recentlyMusicImage}
                  source={require('../assets/images/img.png')}
                />
                <View style={styles.recentlyMusicText}>
                  <Text style={[styles.recentlyMusicText1, {color: 'white'}]}>
                    BILE
                  </Text>
                  <Text
                    style={[
                      styles.recentlyMusicText2,
                      {color: 'rgba(255, 255, 255, 0.4)'},
                    ]}>
                    BILE
                  </Text>
                </View>
              </View>
              <View>
                <Image
                  style={styles.recentlyMusicImage}
                  source={require('../assets/images/img.png')}
                />
                <View style={styles.recentlyMusicText}>
                  <Text style={[styles.recentlyMusicText1, {color: 'white'}]}>
                  BILE
                  </Text>
                  <Text
                    style={[
                      styles.recentlyMusicText2,
                      {color: 'rgba(255, 255, 255, 0.4)'},
                    ]}>
                    BILE
                  </Text>
                </View>
              </View>
            </View>
          </View>
  
          <View style={styles.allmusic}>
            <View style={styles.recentlyOption}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}>
                Musics
              </Text>
              <Text style={{color: 'black'}}>See All</Text>
            </View>
  
            <ScrollView>
              {audioFiles &&
                audioFiles.map((audio, index) => {
                  return (
                    <Pressable
                      key={audio.id}
                      style={styles.infoMusic}
                      onPress={() =>
                        navigation.navigate('Play', {id: audio.id})
                      }
                      >
                      <Image
                        style={{width: 80, height: 80}}
                        source={require('../assets/images/img.png')}
                      />
  
                      <View style={styles.MusicText}>
                        <Text style={[styles.MusicText1, {color: 'black'}]}>
                          {audio.title}
                        </Text>
                        <Text
                          style={[
                            styles.MusicText2,
                            {color: 'rgba(255, 255, 255, 0.4)', marginTop: '5%'},
                          ]}>
                          yann tiarsen
                        </Text>
                      </View>
                    </Pressable>
                  );
                })}
            </ScrollView>
          </View>
        </View>
        <Image
          style={styles.flowbottom}
          source={require('../assets/images/Left 2.png')}
        />
      </>
    );
  };
  
  export default PlayList;
  
  const styles = StyleSheet.create({
    musicsscreen: {
      color: 'white',
      paddingHorizontal: 20,
    },
    recentlyOption: {
      marginTop: '5%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    recently: {},
    recentlyMusic: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    recentlyMusicImage: {
      width: 180,
      height: 180,
    },
    recentlyMusicText: {
      marginLeft: '15%',
      marginTop: '-15%',
    },
    infoMusic: {
      flexDirection: 'row',
    },
    MusicText: {
      marginTop: '4%',
      marginLeft: '2%',
    },
    flowbottom: {
      position: 'absolute',
      bottom: -100,
      // height:300,
      // width:"100%"
    },
    flowleft: {
      position: 'absolute',
      left: 0,
      top: 0,
    },
  });
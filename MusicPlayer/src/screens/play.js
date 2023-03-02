import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Slider,
  } from 'react-native';
  import React, {useEffect, useContext, useState} from 'react';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import LinearGradient from 'react-native-linear-gradient';
  import TrackPlayer, {
    Event,
    State,
    usePlaybackState,
    useProgress,
    useTrackPlayerEvents,
  } from 'react-native-track-player';
  import {StateGlobal} from '../utils/StateProvider';
  
  const Play = ({navigation, route}) => {
    const {audioFiles} = useContext(StateGlobal);
    const [id, setId] = useState(route.params.id);
    const [play, setPlay] = useState(true);
    const progress = useProgress();
    const [sliderValue, setSliderValue] = useState(0);
  
    useEffect(() => {
      setSliderValue(progress.position);
    }, [progress.position]);
  
    const handleSliderValueChange = value => {
      setSliderValue(value);
      TrackPlayer.seekTo(value);
    };
  
    const getMusic = async () => {
      audioFiles.forEach(async audio => {
        await TrackPlayer.add(audio);
      });
    };
  
    const PlayMusic = async () => {
      await TrackPlayer.skip(id);
      await TrackPlayer.play();
    };
  
    const pausePlayMusic = async () => {
      if (play) {
        await TrackPlayer.pause();
        setPlay(false);
      } else {
        await TrackPlayer.play();
        setPlay(true);
      }
    };
  
    useEffect(async () => {
      getMusic();
      PlayMusic();
    }, []);
    return (
      <>
        <Image
          style={styles.imgBottom}
          source={require('../assets/images/Button.png')}
        />
        <View style={styles.player}>
          <View style={styles.topbar}>
            <View>
              <AntDesign name="left" color="white" size={23} />
            </View>
            <Text style={{color: 'white', fontSize: 18}}></Text>
            <View>
              <AntDesign name="bars" color="white" size={23} />
            </View>
          </View>
          <Image source={require('../assets/images/img.png')} />
          <View style={styles.infoMusic}>
            <View style={styles.nameMusic}>
              <Text
                style={[
                  styles.recentlyMusicText1,
                  {color: 'white', fontSize: 23},
                ]}>
              </Text>
              <Text
                style={[
                  styles.recentlyMusicText2,
                  {color: '#42C83C', fontSize: 18},
                ]}>
              </Text>
            </View>
            <Text style={{color: 'white', fontSize: 20}}></Text>
          </View>
  
          <View style={styles.Spectrum}>
            <Slider
              style={styles.progressBar}
              minimumValue={0}
              maximumValue={progress.duration}
              value={sliderValue}
              onValueChange={handleSliderValueChange}
              minimumTrackTintColor='#42C83C'
              maximumTrackTintColor="#444"
              thumbTintColor='#42C83C'
            />
  
            <View style={styles.timer}>
            </View>
          </View>
  
          <View style={styles.options}>
            <TouchableOpacity>
              <AntDesign name="reload1" color='#42C83C' size={23} />
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
              <AntDesign name="stepbackward" color='#42C83C' size={23} />
            </TouchableOpacity>
  
            <LinearGradient
              colors={['#42C83C', '#42C83C']}
              style={styles.playpause}>
              <TouchableOpacity onPress={() => pausePlayMusic()}>
                {play ? (
                  <AntDesign name="pause" color="#fff" size={40} />
                ) : (
                  <AntDesign name="play" color="#fff" size={40} />
                )}
              </TouchableOpacity>
            </LinearGradient>
  
            <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
              <AntDesign name="stepforward" color='#42C83C' size={23} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="reload1" color='#42C83C' size={23} />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  
  export default Play;
  
  const styles = StyleSheet.create({
    player: {
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    topbar: {
      width: '100%',
      marginTop: '6%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    infoMusic: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '-15%',
    },
    Spectrum: {
      marginTop: '5%',
      width: '100%',
    },
    timer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '2%',
    },
    options: {
      marginTop: '15%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    },
    playpause: {
      borderRadius: 100,
      padding: 10,
      
    },
    imgBottom: {
      position: 'absolute',
      left: 0,
      bottom: '-20%',
      width: '100%',
    },
  });
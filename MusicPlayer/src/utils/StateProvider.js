import React, {useState, createContext} from 'react';
import {PermissionsAndroid} from 'react-native';
import RNFS from 'react-native-fs';

export const StateGlobal = createContext();

const StateProvider = props => {
  const [audioFiles, setaudioFiles] = useState(null);

  const getSongs = async () => {
    try {
      let songs = [];
      const path = RNFS.ExternalStorageDirectoryPath + '/Music/';
      const files = await RNFS.readDir(path);

      await files.map((file, index) => {
        songs.push({
          id: index,
          title: file.name.split('.')[0],
          url: file.path,
          artist: 'vise',
          artwork: 'kkkd',
        });
      });

      setaudioFiles(songs);
    } catch (error) {
      console.log(error);
    }
  };
  const requestFileSystemPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'File System Permission',
          message:
            'This app needs access to your file system to search for files',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('File system permission granted');
      } else {
        console.log('File system permission denied');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StateGlobal.Provider
      value={{requestFileSystemPermission, getSongs, audioFiles}}>
      {props.children}
    </StateGlobal.Provider>
  );
};

export default StateProvider;
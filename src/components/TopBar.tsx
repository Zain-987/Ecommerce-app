import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const TopBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
        backgroundColor: '#bdc3c7',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          borderRadius: 10,
          backgroundColor: '#ecf0f1',
          // padding: 5,
          marginRight: 8,
          paddingHorizontal: 5,
        }}>
        <Icon name="search" color="gray" size={24} />
        <TextInput
          style={{marginLeft: 5, flex: 1, fontSize: 18, color: 'black'}}
        />
      </View>
      <Icon name="microphone" color="black" size={24} />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import data from '../utils/CategoriesData';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const CategoriesOption = () => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
      {data.map(category => (
        <Pressable
          style={{
            marginHorizontal: 15,
            alignItems: 'center',
          }}
          key={category.id}>
          <Icon name={category.icon} size={35} color={'#ff7675'} />
          <Text>{category.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default CategoriesOption;

const styles = StyleSheet.create({});

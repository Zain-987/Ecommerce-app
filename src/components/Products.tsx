import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import ProductData from '../utils/ProductData';
import {useNavigation} from '@react-navigation/native';
import Header from './Header';
const Products = () => {
  const navigation = useNavigation();
  const ProductItems = ({item}) => (
    <Pressable
      style={styles.item}
      onPress={() => navigation.navigate('details', {id: item._id})}>
      <Image
        source={{uri: item.imageUrl}}
        resizeMode="contain"
        style={{height: 160}}
      />
      <View style={{padding: 5}}>
        <Text style={{fontWeight: '700'}}>{item.name}</Text>
        <Text style={{fontSize: 16}}>Only {item.price} Rs.</Text>
        {/* <View style={{flexDirection: 'row'}}> */}
        <Pressable
          style={{
            marginTop: 10,
            padding: 10,
            backgroundColor: '#f39c12',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>Add To Cart</Text>
        </Pressable>
        {/* </View> */}
      </View>
    </Pressable>
  );
  return (
    <>
      <FlatList
        // ListHeaderComponent={Header}
        data={ProductData}
        renderItem={ProductItems}
        keyExtractor={(item: any) => item._id}
        numColumns={2} // Set the number of columns to 2
        contentContainerStyle={styles.container}
      />
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    flex: 1,
    // backgroundColor: '',
    // padding: 10,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 5,
    shadowOffset: 10,
  },
});

import {
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import ProductsData from '../utils/ProductData';
const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{marginTop: 10}}>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={24} />
      </TouchableOpacity>

      <View style={{padding: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#f39c12',
            alignItems: 'center',
            padding: 8,
            borderRadius: 5,
          }}
          //   onPress={}
        >
          <Text style={{fontWeight: '700'}}>Confirm Order </Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10}}>
        {ProductsData.map(product => (
          <Pressable
            key={product._id}
            style={{
              padding: 10,
              borderWidth: 0.3,
              marginVertical: 10,
              borderRadius: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Image
                source={{uri: product.imageUrl}}
                style={{height: 80, width: 80, borderRadius: 100}}
                resizeMode="contain"
              />
              <View style={{padding: 5, justifyContent: 'center'}}>
                <Text numberOfLines={1} style={{fontWeight: '700'}}>
                  {product.name}
                </Text>
                <Text numberOfLines={1}>{product.price} Rs.</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#e74c3c',
                padding: 10,
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text style={{fontWeight: '700'}}>Remove Item</Text>
            </TouchableOpacity>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});

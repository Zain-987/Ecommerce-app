import {
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ProductsData from '../utils/ProductData';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const ProductDetail = () => {
  const route = useRoute();

  let [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState({});
  useEffect(() => {
    const getData = async () => {
      const data = await ProductsData.find(
        ele => ele._id === route?.params?.id,
      );
      setItem(data);
    };
    getData();
  }, []);

  const navigation = useNavigation();
  const DecreaseQuantity = () => {
    if (quantity === 1) {
      Alert.alert('Quantity must be Greater than or Equal to 1 ');
      return;
    }
    setQuantity(quantity - 1);
  };

  const IncreaseQuantity = () => {
    if (quantity === 10) {
      Alert.alert('Quantity must be Less than or Equal to 10 ');
      return;
    }
    setQuantity(quantity + 1);
  };

  const AddToCart = () => {
    navigation.navigate('cart');
  };
  return (
    <View style={{marginTop: 10}}>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={24} />
      </TouchableOpacity>
      <Image
        source={{uri: item.imageUrl}}
        // width={'100%'}
        // height={350}
        style={{width: '100%', height: 350}}
        resizeMode="contain"
      />
      <View style={{padding: 10}}>
        <Text
          style={{fontSize: 18, fontWeight: '700', lineHeight: 25}}
          numberOfLines={2}>
          {item?.name} This is Something which i needs to care about
        </Text>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 20,
            marginTop: 10,
            textAlign: 'justify',
          }}>
          {item?.price} Rs.
        </Text>
        <Text
          style={{
            fontSize: 15,
            lineHeight: 20,
            marginTop: 10,
            textAlign: 'justify',
          }}
          numberOfLines={4}>
          {item?.description}
        </Text>
        <View
          style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
              borderWidth: 0.5,
            }}
            onPress={DecreaseQuantity}>
            <Icon name="minus" size={24} />
          </TouchableOpacity>
          <Text style={{marginHorizontal: 15, fontSize: 18}}>{quantity}</Text>
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 10,
              borderWidth: 0.5,
            }}
            onPress={IncreaseQuantity}>
            <Icon name="plus" size={24} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: '#f39c12',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={AddToCart}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});

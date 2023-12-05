import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../Layout';
import TopBar from '../components/TopBar';
import CategoriesOption from '../components/CategoriesOption';
import HomeCarousel from '../components/HomeCarousel';
import Products from '../components/Products';

const HomeScreen = () => {
  return (
    <Layout>
      <CategoriesOption />
      <HomeCarousel />
      <View>
        <Products />
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = ({children}: any) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <View>{children}</View>

      <Footer />
    </ScrollView>
  );
};

export default Layout;

const styles = StyleSheet.create({});

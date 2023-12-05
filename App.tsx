import {StatusBar ,  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Navigation from './Navigation';
const App = () => {
  return (
    <>
    {/* <StatusBar style="auto" barStyle={"#f0f9f4"}/> */}
    <Navigation/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
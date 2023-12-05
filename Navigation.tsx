import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ProductDetail from './src/screen/ProductDetail';
import CartScreen from './src/screen/CartScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import LoginScreen from './src/screen/LoginScreen';
import SendEmailScreen from './src/screen/SendEmailScreen';
import OTPScreen from './src/screen/OTPScreen';
import ChangePassword from './src/screen/ChangePassword';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// Define your custom theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'your_primary_color',
    background: 'your_background_color',
    card: 'your_card_color',
    text: 'your_text_color',
    border: 'your_border_color',
  },
};
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={CartScreen} />
    </Tab.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="reset"
          component={SendEmailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="otp"
          component={OTPScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="change"
          component={ChangePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="details"
          component={ProductDetail}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Main"
          component={MyTabs}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="cart"
          component={CartScreen}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

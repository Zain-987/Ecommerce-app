// OTPScreen.js
import React from 'react';
import {
  KeyboardAvoidingView,
  Image,
  View,
  Pressable,
  TextInput,
  Button,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

const SignupSchema = Yup.object().shape({
  otp: Yup.string().required('Required'),
});

const OTPScreen = () => {
  const navigation = useNavigation();
  const handleSignup = values => {
    // Handle signup logic here
    console.log(values);
  };

  return (
    <Formik
      initialValues={{otp: ''}}
      validationSchema={SignupSchema}
      onSubmit={handleSignup}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <KeyboardAvoidingView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            width: Dimensions.get('screen').width * 1,
          }}>
          <Image
            source={{
              uri: 'https://northpointrp.com/wp-content/uploads/2019/01/Headshot-Placeholder-1.jpg',
            }}
            style={{
              width: 120,
              height: 120,
              resizeMode: 'contain',
              borderRadius: 100,
              marginBottom: 20,
            }}
          />
          <Pressable
            onPress={() => navigation.navigate('change')}
            style={{
              marginBottom: 20,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>
              Enter Your OTP
            </Text>
          </Pressable>

          <TextInput
            placeholder="Enter Your OTP"
            onChangeText={handleChange('otp')}
            onBlur={handleBlur('otp')}
            value={values.otp}
            secureTextEntry
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: 'gray',
              borderRadius: 5,
              paddingHorizontal: 8,
              marginVertical: 15,
            }}
          />
          {touched.otp && errors.otp && (
            <Text style={{color: '#e74c3c', marginTop: 5}}>{errors.otp}</Text>
          )}

          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              width: '100%',
              alignItems: 'center',
              padding: 10,
              marginTop: 20,
              borderRadius: 5,

              backgroundColor: '#2980b9',
            }}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>
              Verify Otp
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default OTPScreen;

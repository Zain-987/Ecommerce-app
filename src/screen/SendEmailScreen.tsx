// SendEmailScreen.js
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
  email: Yup.string().email('Invalid email').required('Required'),
});

const SendEmailScreen = () => {
  const navigation = useNavigation();
  const handleSignup = values => {
    // Handle signup logic here
    console.log(values);
  };

  return (
    <Formik
      initialValues={{username: '', email: '', password: ''}}
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
            onPress={() => navigation.navigate('otp')}
            style={{
              marginBottom: 20,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>
              {' '}
              <Text style={{fontSize: 24, fontWeight: '700'}}>
                Send Your Email
              </Text>
            </Text>
          </Pressable>

          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: 'gray',
              borderRadius: 5,
              paddingHorizontal: 8,
              marginVertical: 15,
            }}
          />
          {touched.email && errors.email && (
            <Text style={{color: '#e74c3c', marginTop: 5}}>{errors.email}</Text>
          )}

          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              width: '100%',
              alignItems: 'center',
              padding: 10,
              marginTop: 10,
              borderRadius: 5,

              backgroundColor: '#2980b9',
            }}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>
              Send Email
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default SendEmailScreen;

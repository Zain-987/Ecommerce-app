// ChangePassword.js
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
  password: Yup.string()
    .min('Password must be atleast 8 Characters')
    .required('Required'),
  confirmpassword: Yup.string().oneOf([Yup.ref('password'), null]),
});

const ChangePassword = () => {
  const navigation = useNavigation();
  const handleSignup = values => {
    // Handle signup logic here
    console.log(values);
  };

  return (
    <Formik
      initialValues={{confirmpassword: '', password: ''}}
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
            onPress={() => navigation.navigate('login')}
            style={{
              marginBottom: 20,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>
              Chane Your Password
            </Text>
          </Pressable>
          <TextInput
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: 'gray',
              borderRadius: 5,
              paddingHorizontal: 8,
              marginVertical: 15,
            }}
          />
          {touched.password && errors.password && (
            <Text style={{color: '#e74c3c', marginTop: 5}}>
              {errors.password}
            </Text>
          )}

          <TextInput
            placeholder="Confirm Password"
            onChangeText={handleChange('confirmpassword')}
            onBlur={handleBlur('confirmpassword')}
            value={values.confirmpassword}
            style={{
              width: '100%',
              borderWidth: 0.5,
              borderColor: 'gray',
              borderRadius: 5,
              paddingHorizontal: 8,
              marginVertical: 15,
            }}
          />
          {touched.confirmpassword && errors.confirmpassword && (
            <Text style={{color: '#e74c3c', marginTop: 5}}>
              {errors.confirmpassword}
            </Text>
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
              Change Password
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default ChangePassword;

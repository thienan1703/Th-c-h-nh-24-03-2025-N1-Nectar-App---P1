import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Image
                source={require('../assets/image2.jpg')} 
                style={styles.background}
              />
      <Text style={styles.title}>Get your groceries with nectar</Text>
      <TouchableOpacity
        style={styles.phoneInput}
        onPress={() => navigation.navigate('Number')}
      >
        <Image
          source={{ uri: 'https://flagcdn.com/w40/bd.png' }}
          style={styles.flag}
        />
        <Text style={styles.countryCode}>+84</Text>
        <Ionicons name="chevron-down" size={20} color="#888" />
      </TouchableOpacity>
      <Text style={styles.orText}>Or connect with social media</Text>
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#4285F4' }]}>
        <Ionicons name="logo-google" size={20} color="#FFF" style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3B5998' }]}>
        <Ionicons name="logo-facebook" size={20} color="#FFF" style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 },
  phoneInput: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#DDD', borderRadius: 10, padding: 10, marginBottom: 20 },
  flag: { width: 24, height: 24, marginRight: 10 },
  countryCode: { fontSize: 16, marginRight: 10 },
  orText: { fontSize: 14, color: '#888', textAlign: 'center', marginVertical: 20 },
  socialButton: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 10, marginBottom: 10 },
  socialIcon: { marginRight: 10 },
  socialButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default SignInScreen;
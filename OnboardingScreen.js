import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image1.jpg')} // Sửa đường dẫn: ../ để quay lại thư mục gốc
        style={styles.background}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome{'\n'}to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  background: { width: '100%', height: '100%', resizeMode: 'cover', position: 'absolute', top: 0 },
  content: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', padding: 20 },
  title: { fontSize: 36, fontWeight: 'bold', textAlign: 'center', color: '#FFF', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#FFF', textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#2ECC71', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 25, width: '80%' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});

export default OnboardingScreen;
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000); // Chuyển sau 3 giây
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Ionicons name="leaf" size={40} color="#FFF" style={styles.logoIcon} />
        <Text style={styles.logoText}>nectar</Text>
      </View>
      <Text style={styles.subText}>online grocerist</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2ECC71', justifyContent: 'center', alignItems: 'center' },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoIcon: { marginRight: 10 },
  logoText: { fontSize: 40, color: '#FFF', fontWeight: 'bold' },
  subText: { fontSize: 16, color: '#FFF', marginTop: 10 },
});

export default SplashScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NumberScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = () => {
    if (phoneNumber.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }
    navigation.navigate('Verification');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
      {'\n'}{'\n'}
        Enter your mobile number</Text>
      <View style={styles.inputContainer}>
        
        <Image
          source={{ uri: 'https://flagcdn.com/w40/bd.png' }}
          style={styles.flag}
        />
        <Text style={styles.countryCode}>+84</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Mobile Number"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>→</Text>
      </TouchableOpacity>
      <View style={styles.keyboard}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map((key, index) => (
          <TouchableOpacity
            key={index}
            style={styles.key}
            onPress={() => {
              if (key === '⌫') {
                setPhoneNumber(phoneNumber.slice(0, -1));
              } else if (key !== '') {
                setPhoneNumber(phoneNumber + key);
              }
            }}
          >
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#DDD', marginBottom: 20 },
  flag: { width: 24, height: 24, marginRight: 10 },
  countryCode: { fontSize: 16, marginRight: 10 },
  input: { flex: 1, fontSize: 16, paddingVertical: 10 },
  nextButton: { backgroundColor: '#2ECC71', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginBottom: 20 },
  nextButtonText: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  keyboard: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  key: { width: '30%', padding: 20, alignItems: 'center', marginVertical: 5 },
  keyText: { fontSize: 20 },
});

export default NumberScreen;
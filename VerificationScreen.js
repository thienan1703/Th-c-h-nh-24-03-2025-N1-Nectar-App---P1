import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VerificationScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleNext = () => {
    if (otp.join('').length !== 4) {
      alert('Please enter a 4-digit code');
      return;
    }
    navigation.navigate('Payment');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      {'\n'}{'\n'}{'\n'}Enter your 4-digit code</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>→</Text>
      </TouchableOpacity>
      <View style={styles.keyboard}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'].map((key, index) => (
          <TouchableOpacity
            key={index}
            style={styles.key}
            onPress={() => {
              const currentIndex = otp.findIndex(digit => digit === '');
              if (key === '⌫') {
                const lastIndex = otp.findLastIndex(digit => digit !== '');
                if (lastIndex !== -1) {
                  const newOtp = [...otp];
                  newOtp[lastIndex] = '';
                  setOtp(newOtp);
                }
              } else if (key !== '' && currentIndex !== -1) {
                const newOtp = [...otp];
                newOtp[currentIndex] = key;
                setOtp(newOtp);
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
  otpContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  otpInput: { borderBottomWidth: 1, borderColor: '#DDD', width: 40, textAlign: 'center', fontSize: 20, paddingVertical: 10 },
  resendButton: { alignSelf: 'flex-end', marginBottom: 20 },
  resendText: { color: '#2ECC71', fontSize: 16 },
  nextButton: { backgroundColor: '#2ECC71', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginBottom: 20 },
  nextButtonText: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  keyboard: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  key: { width: '30%', padding: 20, alignItems: 'center', marginVertical: 5 },
  keyText: { fontSize: 20 },
});

export default VerificationScreen;
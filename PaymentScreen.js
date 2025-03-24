import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('5261 4141 0151 8472');
  const [cardholderName, setCardholderName] = useState('Christie Doe');
  const [expiryDate, setExpiryDate] = useState('06 / 2024');
  const [cvv, setCvv] = useState('915');

  const handlePayment = () => {
    if (!cardNumber || !cardholderName || !expiryDate || !cvv) {
      Alert.alert('Error', 'Please fill in all card details.');
      return;
    }
    navigation.navigate('Success');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Checkout</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>₹ 1,527</Text>
          <Text style={styles.gst}>Including GST (18%)</Text>
        </View>
      </View>

      <View style={styles.paymentOptions}>
        <TouchableOpacity style={[styles.optionButton, styles.selectedOption]}>
          <Ionicons name="card-outline" size={20} color="#28A745" style={styles.optionIcon} />
          <Text style={styles.optionText}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="logo-apple" size={20} color="#000" style={styles.optionIcon} />
          <Text style={styles.optionText}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Card Number</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={setCardNumber}
          placeholder="Enter card number"
          keyboardType="numeric"
        />
        <View style={styles.cardIcons}>
          <Ionicons name="card" size={20} color="#FF6200" />
          <Ionicons name="card" size={20} color="#FFD700" style={{ marginLeft: 5 }} />
        </View>
      </View>

      <Text style={styles.label}>Cardholder Name</Text>
      <TextInput
        style={[styles.input, styles.inputContainer]}
        value={cardholderName}
        onChangeText={setCardholderName}
        placeholder="Enter cardholder name"
      />

      <View style={styles.row}>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>Expiry Date</Text>
          <TextInput
            style={[styles.halfInput, styles.inputContainer]}
            value={expiryDate}
            onChangeText={setExpiryDate}
            placeholder="MM / YYYY"
          />
        </View>
        <View style={styles.halfInputContainer}>
          <Text style={styles.label}>CVV / CVC</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.halfInput}
              value={cvv}
              onChangeText={setCvv}
              placeholder="CVV"
              keyboardType="numeric"
            />
            <Ionicons name="help-circle-outline" size={20} color="#888" style={{ marginLeft: 5 }} />
          </View>
        </View>
      </View>

      <Text style={styles.infoText}>
        We will send you an order details to your email after the successful payment
      </Text>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Ionicons name="lock-closed" size={20} color="#FFF" style={styles.lockIcon} />
        <Text style={styles.payButtonText}>Pay for the Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  amountContainer: { alignItems: 'flex-end' },
  amount: { fontSize: 20, fontWeight: 'bold' },
  gst: { fontSize: 12, color: '#888' },
  paymentOptions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  optionButton: { flex: 1, flexDirection: 'row', padding: 15, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginHorizontal: 5, backgroundColor: '#FFF', elevation: 2 },
  selectedOption: { backgroundColor: '#E0F7E9', borderColor: '#28A745', borderWidth: 1 },
  optionIcon: { marginRight: 5 },
  optionText: { fontSize: 16, fontWeight: 'bold' },
  label: { fontSize: 14, color: '#333', marginBottom: 5, marginTop: 10 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#DDD', borderRadius: 10, backgroundColor: '#FFF' },
  input: { flex: 1, padding: 10, fontSize: 16 },
  cardIcons: { flexDirection: 'row', paddingHorizontal: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  halfInputContainer: { flex: 1, marginHorizontal: 5 },
  halfInput: { flex: 1, padding: 10, fontSize: 16 },
  infoText: { fontSize: 14, color: '#888', textAlign: 'center', marginVertical: 20 },
  payButton: { flexDirection: 'row', backgroundColor: '#28A745', padding: 15, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  lockIcon: { marginRight: 5 },
  payButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default PaymentScreen;
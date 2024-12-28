import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const data = [
    { id: '1', title: 'Dollar', value: 84 },
    { id: '2', title: 'Dinar', value: 103 },
    { id: '3', title: 'Euro', value: 100 },
    { id: '4', title: 'Yen', value: 73 },
    { id: '5', title: 'Pound', value: 101 },
    { id: '6', title: 'Ruble', value: 34 },
    { id: '7', title: 'Real', value: 32 },
    { id: '8', title: 'Taka', value: 1 },
    { id: '9', title: 'USD', value: 84 },
  ];

  const [rupee, setRupee] = useState('');
  const [ans, setAns] = useState('');
  const [target, setTarget] = useState('');
  const [error, setError] = useState('');

  const handlePress = (item) => {
    if (!rupee) {
      setError('Please enter an amount in Rupees.');
      return;
    }
    setError('');
    const num = parseFloat(rupee);
    if (!isNaN(num)) {
      const convertVal = num * item.value;
      const result = convertVal.toFixed(2);
      setAns(result);
      setTarget(item.title);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && { backgroundColor: '#4a90e2' }, // Feedback on press
        ]}
        onPress={() => handlePress(item)}
      >
        <Text style={styles.buttonText}>{item.title}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        {ans ? `${rupee} INR = ${ans} ${target}` : 'Enter an amount and select a currency'}
      </Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        style={styles.textEntry}
        placeholder="Enter the amount in INR"
        value={rupee}
        onChangeText={setRupee}
        keyboardType="numeric"
        placeholderTextColor="#aaa"
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={3}
        contentContainerStyle={styles.flatList}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef3f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  resultText: {
    fontSize: 20,
    marginVertical: 20,
    color: '#2c3e50',
    fontWeight: '600',
    textAlign: 'center',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  textEntry: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 12,
    width: '90%',
    padding: 12,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  flatList: {
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 18,
    margin: 8,
    borderRadius: 12,
    width: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

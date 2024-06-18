import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VerticalText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.verticalText}>TECHNIA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  verticalText: {
    fontSize: 140,
    fontWeight: 'bold',
    color: '#ccc',
    writingDirection: 'rtl', // Ensures correct text layout
    transform: [{ rotate: '-90deg' }], // Rotate text vertically
  },
});

export default VerticalText;

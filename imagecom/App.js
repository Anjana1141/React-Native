import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View } from 'react-native';
import styles from './style'; // Assuming you have a style.js file in the same directory

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require('./assets/hi.jpeg')} />
      </View>
    </View>
  );
}

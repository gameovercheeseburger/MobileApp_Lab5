import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const [easterEgg, setEasterEgg] = useState(false);

  const toggleEasterEgg = () => setEasterEgg(!easterEgg);

  return (
    <MainLayout>
      <Text style={styles.text}>App Name: Lab5 Mobile app is Awesome</Text>
      <TouchableOpacity onPress={toggleEasterEgg}>
        <Text style={[styles.text, styles.name]}>Created by: Patrik Santiago</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
      {easterEgg && <Text style={styles.easterEgg}>🎉🎉🎉 AWESOOOOME! 🎉🎉🎉</Text>}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  name: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  easterEgg: {
    fontSize: 16,
    color: 'green',
    marginTop: 20,
  },
});

export default AboutScreen;

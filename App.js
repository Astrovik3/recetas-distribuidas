import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App.js already been modified.</Text>
      <Text>Create new folder for screens...</Text>
      <Text>Grupo 10 diezzzzzzzzzzzz...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCDC8C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

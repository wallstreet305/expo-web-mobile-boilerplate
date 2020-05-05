import React from 'react';
import { StyleSheet, Text, View, Platform, AppRegistry } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={{width : '80%', height : 200, backgroundColor:'yellow'}}>
       <Text> hello web </Text>
      </View>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


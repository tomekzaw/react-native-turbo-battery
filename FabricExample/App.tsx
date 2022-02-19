import {Button, StyleSheet, View} from 'react-native';

import React from 'react';
import {getBatteryLevel} from 'react-native-turbo-battery';

export default function App() {
  const handlePress = () => {
    console.log(getBatteryLevel());
  };

  return (
    <View style={styles.container}>
      <Button onPress={handlePress} title="Get battery level" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

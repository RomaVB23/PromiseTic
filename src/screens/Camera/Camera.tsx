import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import React from 'react';

export const Camera = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Camera</Text>
      <Button
        title="Knopka"
        onPress={() => navigation.navigate('VideoRedact')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

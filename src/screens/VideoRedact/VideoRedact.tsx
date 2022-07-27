import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

export const VideoRedact = ({navigation}) => {
  return (
    <View>
      <Text>VideoRedact</Text>
      <Button title="Knopka" onPress={() => navigation.navigate('Galerey')} />

    </View>
  );
};

const styles = StyleSheet.create({});

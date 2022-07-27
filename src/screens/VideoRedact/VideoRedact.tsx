import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootScreenProps, RootRoutes} from '../../navigation/RootStackNavigator';

export const VideoRedact: React.FC<RootScreenProps<RootRoutes.VideoRedact>> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.mainContainer, {paddingTop: insets.top}]}>
      <Text>VideoRedact</Text>
      <Button
        title="Go"
        onPress={() => navigation.navigate(RootRoutes.Galerey)}
      />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
});

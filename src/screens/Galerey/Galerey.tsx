import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootScreenProps, RootRoutes} from '../../navigation/RootStackNavigator';

export const Galerey: React.FC<RootScreenProps<RootRoutes.Galerey>> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.mainContainer, {paddingTop: insets.top}]}>
      <Text>Galerey</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

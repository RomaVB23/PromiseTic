import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootScreenProps, RootRoutes} from '../../navigation/RootStackNavigator';

export const Camera: React.FC<RootScreenProps<RootRoutes.Camera>> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.mainContainer, {paddingTop: insets.top}]}>
      <Text>Camera</Text>
      <Button
        title="Go"
        onPress={() => navigation.navigate(RootRoutes.VideoRedact)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

import {StyleSheet, View, Button, Dimensions, FlatList} from 'react-native';
import React from 'react';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootScreenProps, RootRoutes} from '@/navigation/RootStackNavigator';
import {Post} from '@/components/Post';
import posts from '@/data/posts';
export const Galerey: React.FC<RootScreenProps<RootRoutes.Galerey>> = ({
  navigation,
}) => {
  // const insets = useSafeAreaInsets();

  return (
    // <View style={[styles.mainContainer, {paddingTop: insets.top}]}>
    <View>
      <View style={styles.backButton}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
      <FlatList
        data={posts}
        renderItem={item => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        initialNumToRender={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    zIndex: 20,
    backgroundColor: 'red',
    width: 100,
    height: 40,
    top: 50,
    left: 50,
  },
});

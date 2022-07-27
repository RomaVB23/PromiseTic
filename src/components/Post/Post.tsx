import {
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native';
import Video from 'react-native-video';

// Icons
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

// Type Scripts
interface PostProps {
  post: any;
}

export const Post: React.FC<PostProps> = props => {
  const [paused, setPaused] = useState<boolean>(true);
  const [post, setPost] = useState(props.post);
  const [isLike, setIsLike] = useState<boolean>(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  const likeToAdd = isLike ? -1 : 1;

  const onLikePres = () => {
    setPost({
      ...post,
      likes: post.likes + likeToAdd,
    });
    setIsLike(!isLike);
  };
  return (
    <VisibilitySensor
      onChange={isVisible => {
        return (
          console.log(isVisible), isVisible ? setPaused(false) : setPaused(true)
        );
      }}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPlayPausePress}>
          <View>
            <Video
              style={styles.video}
              resizeMode={'cover'}
              repeat={true}
              paused={paused}
              onError={e => console.log(e)}
              source={{
                uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
              }}
            />
            <View style={styles.uiContainer}>
              <View style={styles.rightContainer}>
                <Image
                  style={styles.profilePictures}
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Roman_Reigns_Tribute_to_the_Troops_2016.jpg',
                  }}
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={onLikePres}>
                  <AntDesign
                    name={'heart'}
                    size={40}
                    color={isLike ? 'red' : 'white'}
                  />
                  {/* <Text style={styles.statsLabel}>123</Text> */}
                </TouchableOpacity>

                <View style={styles.iconContainer}>
                  <FontAwesome name={'commenting'} size={40} color="white" />
                  <Text style={styles.statsLabel}>124</Text>
                </View>

                <View style={styles.iconContainer}>
                  <Fontisto name={'share-a'} size={40} color="white" />
                  <Text style={styles.statsLabel}>124</Text>
                </View>
              </View>

              <View style={styles.bottomContainer}>
                <View>
                  <Text style={styles.handle}>@romavb</Text>
                  <Text style={styles.description}>work hard man @borat</Text>

                  <View style={styles.songRow}>
                    <Entypo name={'beamed-note'} size={24} color="white" />
                    <Text style={styles.songName}>Nf - The search</Text>
                  </View>
                </View>
                <Image
                  style={styles.songImage}
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Roman_Reigns_Tribute_to_the_Troops_2016.jpg',
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </VisibilitySensor>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  bottomContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#4c4c4c',
  },
  //  Right container
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  profilePictures: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconContainer: {
    alignSelf: 'center',
  },
  statsLabel: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});

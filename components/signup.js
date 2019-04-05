import React from 'react';
import { ScrollView, Text} from 'react-native';

export default class signup extends React.Component {
  render() {
    return (
      <ScrollView>

        <Text>
          On iOS, a React Native ScrollView uses a native UIScrollView.
          On Android, it uses a native ScrollView.

          On iOS, a React Native Image uses a native UIImageView.
          On Android, it uses a native ImageView.

          React Native wraps the fundamental native components, giving you
          the performance of a native app using the APIs of React.
        </Text>
      </ScrollView>
    );
  }
}
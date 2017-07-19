import React from 'react';
import { Text, View } from 'react-native';

export default class Header extends React.Component {
render() {
    return (
      <View style={styles.viewStyle}> 
            <Text style={styles.textStyle}>Reddit</Text>
    </View>
    );
  }
}

const styles = {
    viewStyle: {
        paddingTop: 22,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20
    }
}

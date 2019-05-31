/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ItemList from './Card';
import {getData} from '../../service/Animelist';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class ListView extends Component {

  state = {
    anime: null
  }

  componentDidMount(){
    getData().then(data => this.setState({ anime : data }));
  }

  handlePress (item) {
    Actions.detail({ anime : item})
  }

  render() {
    const lista = this.state.anime;
    return (
      <View style={styles.container}>
        {!lista && <ActivityIndicator size="large" color="#0000ff" />}
        {lista && <FlatList
          data={lista}
          renderItem={({item}) => {
            return(
              <TouchableOpacity
              style={styles.button}
              onPress={() => this.handlePress(item)}>
                <ItemList anime={item} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

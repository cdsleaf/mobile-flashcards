import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import createdStore from './store';
import { purple } from './utils/colors';
import MainContainer from './components/MainContainer';

function MobileStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createdStore}>
        <View style={{flex: 1}}>
          <MobileStatusBar backgroundColor={purple} barStyle='light-content'/>
          <MainContainer />
        </View>
      </Provider>
    );
  }
}

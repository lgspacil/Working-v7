/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import DataDrivenCircleColors from './Components/DataDrivenCircleColors';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppContainer from './AppNavigator';
import configureStore from 'terramap-core/dist/redux/configureStore';
import { NavigationWrapper } from './NavigationWrapper';

MapboxGL.setAccessToken('pk.eyJ1IjoiaXNhYmVsbGVidXR0ZXJmaWVsZCIsImEiOiJjamlxN2JucmEwemNqM3FxczNvdWdpdnJ2In0.km-S6YP0CG8rDBCsHhLBSQ');

export default class Entry extends Component {


  constructor (props) {
    super(props);
  }

  render() {
    const { store, persistor } = configureStore();

    return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppContainer
                ref={navigatorRef => {
                    NavigationWrapper.setNavigatorRef(navigatorRef);
                }}
            />
        </PersistGate>
    </Provider>
    );
  }
}

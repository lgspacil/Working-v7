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
import PointsOnMap from './Components/PointsOnMap';
import EarthQuake from './Components/EarthQuake';
import FitBounds from './Components/FitBounds';
import ImageOverlay from './Components/ImageOverlay';
import FlyTo from './Components/FlyTo';
import GeoJSONSource from './Components/GeoJSONSource';
import DriveThatLine from './Components/DriveThatLine';
import PointsInMapView from './Components/PointsInMapView';
import QueryAtPoint from './Components/QueryAtPoint';
import QueryWithRect from './Components/QueryWithRect';
import SetBearing from './Components/SetBearing';
import SetPitch from './Components/SetPitch';
import SetUserLocationVerticalAlignment from './Components/SetUserLocationVerticalAlignment';
import SetUserTrackingModes from './Components/SetUserTrackingModes';
import ShapeSourceIcon from './Components/ShapeSourceIcon';
import ShowClick from './Components/ShowClick';
import ShowMap from './Components/ShowMap';
import ShowPointAnnotation from './Components/ShowPointAnnotation';
import ShowRegionChange from './Components/ShowRegionChange';
import TakeSnapShot from './Components/TakeSnapshot';
import TakeSnapShotWithMap from './Components/TakeSnapshotWithMap';
import TwoByTwo from './Components/TwoByTwo';
import UserLocationChange from './Components/UserLocationChange';
import WatercolorrasterTiles from './Components/WatercolorRasterTiles';
import YoYo from './Components/YoYo';
import CreateOfflineRegion from './Components/CreateOfflineRegion';
import DataDrivenCircleColors from './Components/DataDrivenCircleColors';



MapboxGL.setAccessToken('pk.eyJ1IjoiaXNhYmVsbGVidXR0ZXJmaWVsZCIsImEiOiJjamlxN2JucmEwemNqM3FxczNvdWdpdnJ2In0.km-S6YP0CG8rDBCsHhLBSQ');

export default class App extends Component {


  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {/* <PointsOnMap /> */}
        {/* <EarthQuake /> */}
        {/* <FitBounds /> */}
        {/* <ImageOverlay /> */}
        {/* <FlyTo /> */}
        <GeoJSONSource />
        {/* <DriveThatLine /> */}
        {/* <PointsInMapView /> */}
        {/* <QueryAtPoint /> */}
        {/* <QueryWithRect /> */}
        {/* <SetBearing /> */}
        {/* <SetPitch /> */}
        {/* <SetUserLocationVerticalAlignment /> */}
        {/* <SetUserTrackingModes /> */}
        {/* <ShapeSourceIcon /> */}
        {/* <ShowClick /> */}
        {/* <ShowMap /> */}
        {/* <ShowPointAnnotation /> */}
        {/* <ShowRegionChange /> */}
        {/* <TakeSnapShot /> */}
        {/* <TakeSnapShotWithMap /> */}
        {/* <TwoByTwo /> */}
        {/* <UserLocationChange /> */}
        {/* <WatercolorrasterTiles /> */}
        {/* <YoYo /> */}
        {/* <CreateOfflineRegion /> */}
        {/* <DataDrivenCircleColors /> */}
      </View>
    );
  }
}

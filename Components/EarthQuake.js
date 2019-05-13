/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import sheet from '../styles/sheet';
// import {Button} from 'react-native-elements';
import { lineString as makeLineString } from '@turf/helpers';
// import RouteSimulator from './RoutesSimulator';

MapboxGL.setAccessToken('pk.eyJ1IjoiaXNhYmVsbGVidXR0ZXJmaWVsZCIsImEiOiJjamlxN2JucmEwemNqM3FxczNvdWdpdnJ2In0.km-S6YP0CG8rDBCsHhLBSQ');

const coordinates = [
  [-73.98330688476561, 40.76975180901395],
  [-73.96682739257812, 40.761560925502806],
  [-74.00751113891602, 40.746346606483826],
  [-73.95343780517578, 40.7849607714286],
  [-73.99017333984375, 40.71135347314246],
  [-73.98880004882812, 40.758960433915284],
  [-73.96064758300781, 40.718379593199494],
  [-73.95172119140624, 40.82731951134558],
  [-73.9829635620117, 40.769101775774935],
  [-73.9822769165039, 40.76273111352534],
  [-73.98571014404297, 40.748947591479705]
]

const layerStyles = MapboxGL.StyleSheet.create({
  singlePoint: {
    circleColor: 'green',
    circleOpacity: 0.84,
    circleStrokeWidth: 2,
    circleStrokeColor: 'white',
    circleRadius: 5,
    circlePitchAlignment: 'map',
  },

  clusteredPoints: {
    circlePitchAlignment: 'map',
    circleColor: MapboxGL.StyleSheet.source(
      [
        [25, 'yellow'],
        [50, 'red'],
        [75, 'blue'],
        [100, 'orange'],
        [300, 'pink'],
        [750, 'white'],
      ],
      'point_count',
      MapboxGL.InterpolationMode.Exponential,
    ),

    circleRadius: MapboxGL.StyleSheet.source(
      [[0, 15], [100, 20], [750, 30]],
      'point_count',
      MapboxGL.InterpolationMode.Exponential,
    ),

    circleOpacity: 0.84,
    circleStrokeWidth: 2,
    circleStrokeColor: 'white',
  },

  clusterCount: {
    textField: '{point_count}',
    textSize: 12,
    textPitchAlignment: 'map',
  },
});


export default class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      coordinates: coordinates
    };
  }

  renderAnnotation = (counter) => {
    const id = `pointAnnotation${counter}`;
    const coordinate = this.state.coordinates[counter];
    const title = `Longitude: ${this.state.coordinates[counter][0]} Latitude: ${this.state.coordinates[counter][1]}`;

    return (
      <MapboxGL.PointAnnotation
        key={id}
        id={id}
        title='Test'
        coordinate={coordinate}>
      </MapboxGL.PointAnnotation>
    );
  }

  renderAnnotations = () => {
    const items = [];

    for (let i = 0; i < this.state.coordinates.length; i++) {
      items.push(this.renderAnnotation(i));
    }

    return items;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <MapboxGL.MapView
        ref={(c) => this._map = c}
        style={{flex: 1}}
        zoomLevel={11}
        showUserLocation={true}
        userTrackingMode={1}
        centerCoordinate={this.state.coordinates[0]}>
          {this.renderAnnotations()}
        </MapboxGL.MapView> */}

        <MapboxGL.MapView
          zoomLevel={6}
          pitch={45}
          centerCoordinate={[-122.400021, 37.789085]}
          style={sheet.matchParent}
          styleURL={MapboxGL.StyleURL.Dark}
        >
          <MapboxGL.ShapeSource
            id="earthquakes"
            cluster
            clusterRadius={50}
            clusterMaxZoom={14}
            url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
          >
            <MapboxGL.SymbolLayer
              id="pointCount"
              style={layerStyles.clusterCount}
            />

            <MapboxGL.CircleLayer
              id="clusteredPoints"
              belowLayerID="pointCount"
              filter={['has', 'point_count']}
              style={layerStyles.clusteredPoints}
            />

            <MapboxGL.CircleLayer
              id="singlePoint"
              filter={['!has', 'point_count']}
              style={layerStyles.singlePoint}
            />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MapView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, Modal, TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import PointsOnMap from '../Components/PointsOnMap';
import EarthQuake from '../Components/EarthQuake';
import FitBounds from '../Components/FitBounds';
import ImageOverlay from '../Components/ImageOverlay';
import FlyTo from '../Components/FlyTo';
import GeoJSONSource from '../Components/GeoJSONSource';
import DriveThatLine from '../Components/DriveThatLine';
import PointsInMapView from '../Components/PointsInMapView';
import QueryAtPoint from '../Components/QueryAtPoint';
import QueryWithRect from '../Components/QueryWithRect';
import SetBearing from '../Components/SetBearing';
import SetPitch from '../Components/SetPitch';
import SetUserLocationVerticalAlignment from '../Components/SetUserLocationVerticalAlignment';
import SetUserTrackingModes from '../Components/SetUserTrackingModes';
import ShapeSourceIcon from '../Components/ShapeSourceIcon';
import ShowClick from '../Components/ShowClick';
import ShowMap from '../Components/ShowMap';
import ShowPointAnnotation from '../Components/ShowPointAnnotation';
import ShowRegionChange from '../Components/ShowRegionChange';
import TakeSnapShot from '../Components/TakeSnapshot';
import TakeSnapShotWithMap from '../Components/TakeSnapshotWithMap';
import TwoByTwo from '../Components/TwoByTwo';
import UserLocationChange from '../Components/UserLocationChange';
import WatercolorrasterTiles from '../Components/WatercolorRasterTiles';
import YoYo from '../Components/YoYo';
import CreateOfflineRegion from '../Components/CreateOfflineRegion';
import DataDrivenCircleColors from '../Components/DataDrivenCircleColors';
import { IS_ANDROID } from '../utils/index';
import SafeAreaView from 'react-native-safe-area-view';
import sheet from '../styles/sheet';
import colors from '../styles/colors';
import MapHeader from '../Components/common/MapHeader';
import { signOut } from 'terramap-core/dist/redux/modules/auth';
import { connect } from 'react-redux';

MapboxGL.setAccessToken('pk.eyJ1IjoiaXNhYmVsbGVidXR0ZXJmaWVsZCIsImEiOiJjamlxN2JucmEwemNqM3FxczNvdWdpdnJ2In0.km-S6YP0CG8rDBCsHhLBSQ');

class ExampleItem {
  constructor(label, Component) {
    this.label = label;
    this.Component = Component;
  }
}

const Examples = [
  new ExampleItem('Data Driven Circle Colors', DataDrivenCircleColors)
]

class Entry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetchingAndroidPermission: IS_ANDROID,
      isAndroidPermissionGranted: false,
      activeExample: -1,
    };
  }

  getActiveItem = () => {
    if (
      this.state.activeExample < 0 ||
      this.state.activeExample >= Examples.length
    ) {
      return null;
    }
    return Examples[this.state.activeExample];
  }

  renderActiveExample = () => {
    const item = this.getActiveItem();

    const modalProps = {
      visible: !!item,
      transparent: true,
      animationType: 'slide',
      onRequestClose: this.onCloseExample,
    };

    return (
      <Modal {...modalProps}>
        <SafeAreaView
          style={[sheet.matchParent, {backgroundColor: colors.primary.pink}]}
          forceInset={{top: 'always'}}
        >
          <View style={styles.exampleBackground}>
            {modalProps.visible ? (
              <item.Component
                key={item.label}
                label={item.label}
                onDismissExample={this.onCloseExample}
                onLogOutApp={() => console.log('lets logout')}
              />
            ) : null}
          </View>
        </SafeAreaView>
      </Modal>
    );
  }

  renderItem = ({item, index}) => {
    return (
      <View style={styles.exampleListItemBorder}>
        <TouchableOpacity onPress={() => this.onExamplePress(index)}>
          <View style={styles.exampleListItem}>
            <Text style={styles.exampleListLabel}>{item.label}</Text>
            <Icon name="keyboard-arrow-right" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  onExamplePress = (activeExamplePosition) => {
    this.setState({activeExample: activeExamplePosition});
  }

  onCloseExample = () => {
    this.setState({activeExample: -1});
  }

  render() {
    return (
      <SafeAreaView
        style={[sheet.matchParent, { backgroundColor: colors.primary.blue }]}
        forceInset={{ top: 'always' }}
      >

        <View style={sheet.matchParent}>
          <MapHeader label="React Native Mapbox GL" onLogOutApp={() => this.props.onSignOut()} />

          <View style={sheet.matchParent}>
            <FlatList
              style={styles.exampleList}
              data={Examples}
              keyExtractor={item => item.label}
              renderItem={this.renderItem}
            />
          </View>

          {this.renderActiveExample()}
        </View>

      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
      auth: state.auth,
      general: state.general
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSignOut: () => dispatch(signOut()),
  }; // here we're mapping actions to props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entry);

const styles = StyleSheet.create({
  noPermissionsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exampleList: {
    flex: 1,
  },
  exampleListItemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  exampleListItem: {
    paddingVertical: 22,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.secondary.white,
  },
  exampleListLabel: {
    fontSize: 15,
  },
  exampleBackground: {
    flex: 1,
    backgroundColor: colors.primary.pinkFaint,
  },
});


{/* <View style={{ flex: 1 }}> */}
{/* <PointsOnMap /> */}
{/* <EarthQuake /> */}
{/* <FitBounds /> */}
{/* <ImageOverlay /> */}
{/* <FlyTo /> */}
{/* <GeoJSONSource /> */}
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
{/* </View> */}

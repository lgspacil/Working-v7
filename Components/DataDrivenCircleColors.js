import React from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import sheet from '../styles/sheet';

import BaseExamplePropTypes from './common/BaseExamplePropTypes';
import Page from './common/Page';

import smileyFaceGeoJSON from '../assets/smiley_face.json';

const styles = MapboxGL.StyleSheet.create({
  circles: {
    circleRadius: MapboxGL.StyleSheet.camera(
      {
        12: 2,
        22: 18,
      },
      MapboxGL.InterpolationMode.Exponential,
    ),

    circleColor: MapboxGL.StyleSheet.source(
      [
        ['White', '#fbb03b'],
        ['Black', '#223b53'],
        ['Hispanic', '#e55e5e'],
        ['Asian', '#3bb2d0'],
        ['Other', '#ccc'],
      ],
      'ethnicity',
      MapboxGL.InterpolationMode.Categorical,
    ),
  },
  smileyFace: {
    fillAntialias: true,
    fillOpacity: 0.1,
    fillColor: 'green',
    fillOutlineColor: 'black',
  },
});

class DataDrivenCircleColors extends React.PureComponent {
  static propTypes = {
    ...BaseExamplePropTypes,
  };

  render() {
    return (
      <Page {...this.props}>
        <MapboxGL.MapView
          zoomLevel={10}
          pitch={45}
          styleURL={MapboxGL.StyleURL.Light}
          centerCoordinate={[-122.400021, 37.789085]}
          style={sheet.matchParent}
        >
          <MapboxGL.VectorSource
            id="population"
            url={'mapbox://examples.8fgz4egr'}
          >
            <MapboxGL.CircleLayer
              id="sf2010CircleFill"
              sourceLayerID="sf2010"
              style={styles.circles}
            />
          </MapboxGL.VectorSource>

          <MapboxGL.ShapeSource id="smileyFaceSource" shape={smileyFaceGeoJSON}>
            <MapboxGL.FillLayer
              id="smileyFaceFill"
              style={styles.smileyFace}
            />
          </MapboxGL.ShapeSource>

        </MapboxGL.MapView>
      </Page>
    );
  }
}

export default DataDrivenCircleColors;

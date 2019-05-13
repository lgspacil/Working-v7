import MapboxClient from 'mapbox';

// import MapboxGL from '@mapbox/react-native-mapbox-gl'

import config from './utils/config';

const client = new MapboxClient(config.get('accessToken'));
export default client;

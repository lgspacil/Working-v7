/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { initAmplify, initNavigation, initTerramapCore } from 'terramap-core/dist';
import { NavigationWrapper } from './NavigationWrapper';
import Entry from './Screens/Entry';
import {TERRAMAP_MODES} from 'terramap-utils/dist/Constants';


initTerramapCore(TERRAMAP_MODES.TERRAMAP_MOBILE, 'prod');
initAmplify('prod');
initNavigation(NavigationWrapper);

AppRegistry.registerComponent(appName, () => App);


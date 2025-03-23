/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AndroidApp from './src/Android';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AndroidApp);

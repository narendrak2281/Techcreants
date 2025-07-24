/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux'
import App from './src/App';
import {name as appName} from './app.json';
import './global.css';

AppRegistry.registerComponent(appName, () => App);

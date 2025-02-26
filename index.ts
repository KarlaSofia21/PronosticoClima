import { registerRootComponent } from 'expo';

import App from './App';
import Login from './app/Screens/Login';
import Tienda from './app/Screens/Tienda';
import ListaProductos from './app/Screens/ListaProductos';
import Pronostico from './app/Screens/Pronostico';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Pronostico);
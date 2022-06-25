import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from './src/navigation';

import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';

import {withAuthenticator} from 'aws-amplify-react-native'

// using Amplify config stored in ./src/aws-exports for configuring aws amplify build 
Amplify.configure(config);

function App() {
  return (
    <NavigationContainer>
        <RootNavigator/>
        <StatusBar style="light"/>
    </NavigationContainer>
    
  );
}

// wrapping App function in higher order withAuthenticator function 
export default withAuthenticator(App);

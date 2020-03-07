import 'react-native-gesture-handler';
import React from 'react';
import { Provider, connect } from 'react-redux';
import Navigator from './src/Navigator';
import store from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;

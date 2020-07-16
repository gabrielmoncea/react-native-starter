import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/Navigator';
import store from './src/Redux/store';

// if (__DEV__) {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   const ReactRedux = require('react-redux');
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//     trackExtraHooks: [[ReactRedux, 'useSelector']],
//   });
// }

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;

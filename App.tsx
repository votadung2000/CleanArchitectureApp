import React from 'react';

import { Provider } from 'react-redux';
import { Provider as InversifyProvider } from 'inversify-react';

import { AppContainer } from './src/presentation/navigators';
import store from './src/presentation/redux/store';
import { container } from './src/di/container';

const App = () => {
  return (
    <Provider store={store}>
      <InversifyProvider container={container}>
        <AppContainer />
      </InversifyProvider>
    </Provider>
  );
};

export default App;

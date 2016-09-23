import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import configureStore from './store';
import './styles/index.css';

const store = configureStore();
injectTapEventPlugin();

const Root = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

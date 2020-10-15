import { IsoTwoTone } from '@material-ui/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

IsoTwoTone('App renders without a problem', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />), div);
    ReactDOM.unmountComponentAtNode('div');
})
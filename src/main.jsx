import "babel-core/polyfill";
import React from 'react';
import Application from './application';

let data = {
  viewer: {
    id: 'viewer',
    options: {
      width: 'auto',
      height: 'auto',
      antialias: true,
      quality: 'medium'
    }
  },
  form: {
    examples: ['IL_1S72_001', 'IL_1S72_001']
  }
};

React.render(
  <Application data={data} />, document.getElementById('application')
);

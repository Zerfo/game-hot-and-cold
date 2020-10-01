import React from 'react';
import ReactDom from 'react-dom';
import Root from '../../src/containers/Root';

it('renderers without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Root />, div);
  ReactDom.unmountComponentAtNode(div);
})
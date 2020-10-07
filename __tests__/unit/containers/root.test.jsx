import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../../src/containers/Root';

it('renderers without crashing', () => {
  const component = shallow(<Root />);

  expect(component).toMatchSnapshot();
});

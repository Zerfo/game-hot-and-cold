import React from 'react';
import { render } from 'react-dom';

import Root from 'containers/Root';

import * as serviceWorker from './serviceWorker';

import 'styles/index.css';

render(<Root />, document.getElementById('root'));

serviceWorker.unregister();

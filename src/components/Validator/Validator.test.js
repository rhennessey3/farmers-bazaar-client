import React from 'react';
import ReactDOM from 'react-dom';
import Validator from './Validator';
import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
    <MemoryRouter>
      <Validator />
    </MemoryRouter>,
    div
  );

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

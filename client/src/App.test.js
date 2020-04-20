import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {render} from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders "womens world cup"', () => {
  const {getByText} =  render(<App/>);

  const header= getByText(/Womens World Cup/i)

  expect (header).toBeTruthy()

});

it('gets by testid', () => {
  const {getByTestId} =  render(<App/>);

  expect getByTestId(/app/i).toBeInTheDocument()

});


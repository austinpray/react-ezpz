import React from 'react';
import App from './containers/App';
import ReactDom from 'react-dom';

const validations = {
  pwLength: {
      test: function (value) {
        return value.length >= 8;
      },
      message: "Your Password must be 8 chars or more"
  },
  noSpaces: {
    test: function (value) {
      return value.includes(" ");
    },
    message: "No Spaces allowed in username"
  }
};

const formFields = [
  {
    name: 'username',
    label: 'Enter Username',
    type: 'text',
    validations: ['noSpaces']
  },
  {
    name: 'password',
    label: 'Enter Password',
    type: 'password',
    validations: ['pwLength']
  }
];

ReactDom.render(
  <App fields={formFields} validations={validations} />,
  document.getElementById('app')
);

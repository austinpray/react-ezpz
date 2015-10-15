import React, {Component} from 'react';

export default class FormValueViewer extends Component {
  render() {
    return (
      <pre>{JSON.stringify(this.props.values, null, " ")}</pre>
    );
  }
}


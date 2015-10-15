import React, {Component} from 'react';
import FormField from '../components/FormField';
import FormValueViewer from '../components/FormValueViewer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillMount() {
    const {fields} = this.props;
    this.setState(fields.reduce((acc, field) => {
      acc[field.name] = field;
      return acc;
    }, {}));
  }
  
  handleFieldChange(name, value) {
    this.setState({
      [name]: Object.assign({}, this.state[name], {value})
    })
  }
  
  renderFormField(field) {
    const {validations} = this.props;
    return (
      <FormField 
        key={field.name}
        value={this.state[field.name].value}
        label={field.label}
        validations={field.validations.map((validationName) => {
          return validations[validationName];
        })}
        handleChange={this.handleFieldChange.bind(this, field.name)}
        type={field.type} />
    );
  }
  
  render() {
    const fields = this.props.fields.map(this.renderFormField.bind(this));
    return (
      <div className="container">
        <div className="page-header">
          <h1>React EZPZ <small>about as simple as it gets</small></h1>
          <p><a href="https://github.com/austinpray/react-ezpz">view sauce</a></p>
        </div>
        <div>{fields}</div>
        <FormValueViewer values={this.state} />
      </div>
    );
  }
}

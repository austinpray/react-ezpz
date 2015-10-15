import React, {Component} from 'react';

export default class FormField extends Component {
  renderErrors(error, key) {
    return (
      <span key={key} className="help-block">{error}</span>
    );
  }
  render() {
    const {type, label, value, handleChange, validations} = this.props;
    const errors = validations.reduce((acc, validation) => {
      if (value && validation.test(value) === false) {
        acc.push(validation.message);
      }
      return acc;
    }, []);
    const hasError = errors.length;
    const classes = ['form-group', hasError ? 'has-error' : null];
    return (
      <div className={classes.join(' ')}>
        <label>{label}</label>
        <input 
          className="form-control" 
          type={type} 
          onChange={(e) => {handleChange(e.target.value)}}
          value={value} />
        {errors.map(this.renderErrors.bind(this))}
      </div>
    );
  }
}


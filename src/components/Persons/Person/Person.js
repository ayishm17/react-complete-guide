import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log('[Person.js] rendering');
    return (
      <Aux>
        {/* <AuthContext.Consumer>
          {context => 
            context.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>
          }   
        </AuthContext.Consumer> */}
        {this.context.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>}
        <p onClick={this.props.click}>Im {this.props.name} and Im {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type='text' 
          onChange={this.props.changed} 
          value={this.props.name}
        />
      </Aux>
    )
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
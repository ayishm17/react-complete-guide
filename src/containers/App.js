import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
//import styled from 'styled-components';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';

// const StyledButton = styled.button`   //style-components example
//   background-color: ${ props => props.alt ? 'red' : 'green' };
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   pointer: cursor;

//   &:hover {
//     background-color: ${ props => props.alt ? 'salmon' : 'lightgreen' };;
//     color: black;
//   }
// `;

class App extends Component {

  constructor(props) {  //first lifecycle hook
    super(props);
    console.log('[App.js] constructor');
    //this.state can initialize state here too
  }

  state = {       //modern syntax will call the constructor in background
    persons: [
      { id: 'ascx', name: 'Mirah', age: 22},
      { id: 'saxzc', name: 'Hafsa', age: 22},
      { id: 'aasx', name: 'Ayishm', age: 23}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {    //second hook
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }


  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState((prevState, props) => {
      return { 
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });

  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render () {
    // const style = {   //inline style example
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   pointer: 'cursor',
    //   ":hover": {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }
    console.log('[App.js] render');    //third hook
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler} 
                  isAuthenticated={this.state.authenticated}
                />;
      // style.backgroundColor = 'red';  //changing inline style constant
      // style[":hover"] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

    }

    return (
      // <WithClass classes={classes.App}>  for first function in WithClass
      <Aux>
        <button onClick={ () => {
          this.setState({ showCockpit: false });
        } }>
          Remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          { this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null }
          {persons}
        </AuthContext.Provider>
      {/* </WithClass> */}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);

import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
//import styled from 'styled-components';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

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
  state = {
    persons: [
      { id: 'ascx', name: 'Mirah', age: '22'},
      { id: 'saxzc', name: 'Hafsa', age: '22'},
      { id: 'aasx', name: 'Ayishm', age: '23'}
    ],
    showPersons: false
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
    this.setState({persons: persons});

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

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
      // style.backgroundColor = 'red';  //changing inline style constant
      // style[":hover"] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;

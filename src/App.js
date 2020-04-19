import React, { Component } from 'react';
import Person from './Person/Person';
//import styled from 'styled-components';
import classes from './App.css';

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
    let btnClasses = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      // style.backgroundColor = 'red';  //changing inline style constant
      // style[":hover"] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

      btnClasses = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, im a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working !</p>
        <button className={btnClasses} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

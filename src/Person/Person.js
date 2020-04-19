import React from 'react';
//import styled from 'styled-components';
import classes from './Person.css';

// const StyledDiv = styled.div`
// 	width: 60%;
// 	margin: 16px auto;
// 	border: 1px solid #eee;
// 	box-shadow: 0 2px 3px #ccc;
// 	padding: 16px;
// 	text-align: center;

// 	@media (min-width: 500px): {
// 		width: '450px';
// 	}
// `;


const person = (props) => {
	const rnd = Math.random();
	if (rnd > 0.7) {
		throw new Error('Something went wrong');
	}
	return (
		<div className={classes.Person}>
		{/* <StyledDiv> */}
			<p onClick={props.click}>Im {props.name} and Im {props.age} years old!</p>
			<p>{props.children}</p>
			<input type='text' onChange={props.changed} value={props.name}/>
		{/* </StyledDiv> */}
		</div>
	)
};

export default person;
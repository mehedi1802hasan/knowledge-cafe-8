import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question'>
            <div>
            <div style={{backgroundColor:"teal",color:'yellow'}}>
            <h3>Question:1- Difference in Props & state</h3>
            <p>Answer:1.Props are passed down from a parent component to a child component, while state is managed within a component itself.
2.Props are read-only and cannot be changed by the child component that receives them, while state can be changed using the setState() method.
3.Props are used to configure a component and can be thought of as its "external" API, while state is used to manage the internal state of a component, such as user input or the current page.</p>
            </div>
            <div style={{backgroundColor:"orange",color:'black'}}>
            <h3>Question:2==How does work useState</h3>
            <p>Answer:useState is a hook in React that allows functional components to manage state. It is called with an initial value for the state variable and returns an array with the current value of the state variable and a function to update it. When the state variable needs to be updated, the update function is called with the new value, which triggers a re-render with the new state value.</p>
            </div>
            <div style={{backgroundColor:"green",color:'black'}}>
            <h3>Question:3==which type of work doing useState without Data loading?</h3>
            <p>Anser: It is a general-purpose hook for managing state in functional components and can be used to manage any kind of state that needs to change over time, such as toggling a boolean value, storing user input, tracking the current state of an application, storing selected values, or storing the current position of a scroll bar or slider.
           .</p>
            </div>
            <div style={{backgroundColor:"yellow",color:'black'}}>
            <h3>Question:4::How does react work?</h3>
            <p>Answer:React is a JavaScript library for building user interfaces that works by allowing developers to create reusable components that are composed together to build complex UIs. It uses a virtual DOM to efficiently update the UI when changes are made and supports declarative programming, making it easier to reason about and maintain code.
            </p>
            </div>
            </div>
        </div>
    );
};

export default Question;
import React, { Component } from 'react';
class ChildComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }


    render() {
        console.log (this.props);
        return (
            <>
               <h1>Child component</h1>
            </>
        )
    }
}
export default ChildComponent
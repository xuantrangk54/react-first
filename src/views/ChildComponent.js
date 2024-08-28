import React, { Component } from 'react';
class ChildComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }


    render() {

        let hometown = 'Thai Binh';
        return (
            <>
               <h1>Child component</h1>
            </>
        )
    }
}
export default ChildComponent
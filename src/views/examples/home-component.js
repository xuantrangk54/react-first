import React, { Component } from 'react';
import ChildComponent from '../ChildComponent';
import HelloComponent from '../HelloComponent';
class HomeComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        jobList:  [
            {
                "name":"1",
                "salary":1000
            },
            {
                "name":"2",
                "salary":2000
            }
        ]
    }

    handleClickButton = () => {
        console.log("clicked")
    }

    handleOnChangeName = (evt) => {
        this.setState({
            name: evt.target.value
        })
    }


    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log (this.state);
    }

    render() {

        let hometown = 'Thai Binh';
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event)=>this.handleChangeFirstName(event)}/><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event)=>this.handleChangeLastName(event)}/><br />
                    <input type='button' value="submit" onClick={(event)=>this.handleSubmit(event)}/>
                </form>
                <ChildComponent name={"nguyen xuan trang"} jobList={this.state.jobList}/>
                <HelloComponent name={"trang helloCompnent"}/>
            </>
        )
    }
}
export default HomeComponent
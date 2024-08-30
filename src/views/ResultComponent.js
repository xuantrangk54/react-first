import './App.scss';
import React from 'react';


class ResultComponent extends React.Component {
  state = {
    firstName: '',
    lastName: ''
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

  render() {
    return (
      <>
        <h2>ResultComponent</h2>
        <form>
          <label htmlFor="fname">First name:</label><br />
          <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)} /><br />
          <label htmlFor="lname">Last name:</label><br />
          <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} /><br />
          <input type='button' value="submit" onClick={(event) => this.handleSubmit(event)} />
        </form></>
    );
  }
}
export default ResultComponent;

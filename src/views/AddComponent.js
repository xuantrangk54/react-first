import './App.scss';
import React from 'react';


class AddComponent extends React.Component {
  state = {
    title: '',
    salary: ''
  }



  handleChangeFirstName = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleChangeLastName = (event) => {
    this.setState({
      salary: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert ('Missing required params')
      return
    }
    this.props.addNewJob({
      id: Math.floor(Math.random()*1001),
      title: this.state.title,
      salary: this.state.salary
    });
    this.setState ({
      title: '',
      salary: ''
    });
  }


  render() {
    return (
      <>
        <h2>AddComponent</h2>
        <form>
          <label htmlFor="fname">Title:</label><br />
          <input type="text" value={this.state.title} onChange={(event) => this.handleChangeFirstName(event)} /><br />
          <label htmlFor="lname">Salary:</label><br />
          <input type="text" value={this.state.slary} onChange={(event) => this.handleChangeLastName(event)} /><br />
          <span>x</span>
          <input type='button' value="submit" onClick={(event) => this.handleSubmit(event)} />
        </form></>
    );
  }
}
export default AddComponent;

import React, { Component } from 'react';
class HomeComponent extends React.Component {
    state = {
        name: 'Trang',
        channel: 'xuantrangk54'
    }

    handleClickButton = ()=>{
        console.log ("clicked me");
    }

    render() {

        let hometown = 'Thai Binh';
        return (
            <>
                <div className="t">{hometown} welcome {this.state.name}</div>
                <div>
                    <p>My channel is: {this.state.channel}</p>
                    <button onClick={()=>{this.handleClickButton()}}>Click me</button>
                </div>
            </>
        )
    }
}
export default HomeComponent
import React, { Component } from 'react';
class HomeComponent extends React.Component {
    state = {
        name: 'Trang',
        channel: 'xuantrangk54'
    }
    render() {

        let hometown = 'Thai Binh';
        { console.log(hometown); }
        return (
            <>
                <div className="t">{hometown} welcome {this.state.name}</div>
                <div>My channel is: {this.state.channel}</div>
            </>
        )
    }
}
export default HomeComponent
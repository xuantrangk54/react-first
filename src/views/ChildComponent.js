import React, { Component } from 'react';
class ChildComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }


    render() {
        let jobList = this.props.jobList;
        return (
            <>
               <h1>Child component</h1>
               {
                jobList.map ((item, index)=>{
                    return (
                        <div>
                            {item.title} - {item.salary}
                        </div>
                    )
                })
               }
            </>
        )
    }
}
export default ChildComponent
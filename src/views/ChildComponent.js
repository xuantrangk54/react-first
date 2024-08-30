import React from 'react';
import './Demo.css'

class ChildComponent extends React.Component {
    state = {
        title: '',
        salary: '',
        id: ''
    }

    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job);
    }

    handleShowHide = () => {
        console.log ("handleShowHide")
    }

    render() {
        let jobList = this.props.jobList;
        return (
            <>
                <h1>Child component</h1>
                <div>
                    <button className='btn-show' onClick={()=>this.handleShowHide()}>Show</button>
                </div>
                {
                    jobList.map((item, index) => {
                        return (
                            <>
                                <div key={item.id}>
                                    {item.title} - {item.salary} <></><span onClick={()=>this.handleOnClickDelete(item)}>X</span><></>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
    }
}
export default ChildComponent
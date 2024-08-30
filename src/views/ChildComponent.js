import React from 'react';
class ChildComponent extends React.Component {
    state = {
        title: '',
        salary: '',
        id: ''
    }

    handleOnClickDelete = (job) => {
        this.props.deleteAJob(job);
    }

    render() {
        let jobList = this.props.jobList;
        return (
            <>
                <h1>Child component</h1>
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
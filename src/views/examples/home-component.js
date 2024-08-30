import React from 'react';
import ChildComponent from '../ChildComponent';
import HelloComponent from '../HelloComponent';
import AddComponent from '../AddComponent';

class HomeComponent extends React.Component {
    state = {
        arrJobs: [
            {
                "id":1,
                "title": "1",
                "salary": 1000
            },
            {
                "id":2,
                "title": "2",
                "salary": 2000
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

    addNewJob = (job) => {
        this.setState ({
            arrJobs : [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter (item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }


    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob}/>
                {/* <ResultComponent/> */}
                <ChildComponent name={"nguyen xuan trang"} jobList={this.state.arrJobs} deleteAJob={this.deleteAJob} />
                {/* <HelloComponent name={"trang helloCompnent"} /> */}
            </>
        )
    }
}
export default HomeComponent
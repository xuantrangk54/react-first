import React from 'react';
import ChildComponent from '../ChildComponent';
import HelloComponent from '../HelloComponent';
import AddComponent from '../AddComponent';
import ResultComponent from '../ResultComponent'

class HomeComponent extends React.Component {
    state = {
        arrJobs: [
            {
                "title": "1",
                "salary": 1000
            },
            {
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


    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob}/>
                {/* <ResultComponent/> */}
                <ChildComponent name={"nguyen xuan trang"} jobList={this.state.arrJobs} />
                <HelloComponent name={"trang helloCompnent"} />
            </>
        )
    }
}
export default HomeComponent
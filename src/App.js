import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      workList: []
    };
  }
  addWorkForm = () => {
    let { workList } = this.state;
    workList.push('id-' + Math.random());
    this.setState({ workList });
  };
  removeWork = deleteWork => {
    console.warn(deleteWork);
    console.warn(this);
    console.log(this[deleteWork]);
    // const workList = this.state.workList.filter(work => work !== deleteWork);
    // this.setState({ workList });
  };
  handleSubmit = e => {
    e.preventDefault();
    const form = Array.prototype.slice
      .call(document.querySelectorAll('.work'))
      .reduce((arr, work) => {
        const copmany = work.querySelector('[name=company]').value;
        const job = work.querySelector('[name=job]').value;
        const detail = work.querySelector('[name=detail]').value;
        return [...arr, { copmany, job, detail }];
      }, []);
    console.log(form);
    // axios.post('url', form);
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.addWorkForm}>+</button>
        <div className="work-list">
          <form onSubmit={this.handleSubmit}>
            {this.state.workList.map(work => (
              <div className="work" key={work} ref={dom => (this[work] = dom)}>
                <input placeholder="公司名稱" type="text" name="company" />
                <input placeholder="工作職務" type="text" name="job" />
                <input placeholder="工作內容" type="text" name="detail" />
                <button type="button" onClick={this.removeWork.bind(this)}>
                  -
                </button>
              </div>
            ))}
            <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

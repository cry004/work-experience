import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// helper
const toWork = work => ({
    copmany: work.querySelector('[name=company]').value,
    job: work.querySelector('[name=job]').value,
    detail: work.querySelector('[name=detail]').value,
  })


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
    const work = toWork(this[deleteWork]);
    const isNoData = !Object.keys(work).some(key => work[key]);
    const isDelete = isNoData ? true: window.confirm("您確定要刪除嗎？");
    if(isDelete) {
      const workList = this.state.workList.filter(work => work !== deleteWork);
      this.setState({ workList });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const form = Array.prototype.slice
      .call(document.querySelectorAll('.work'))
      .reduce((arr, work) => {
        const {
          copmany, job, detail
        } = toWork(work);
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
              <button type="button" onClick={this.removeWork.bind(this, work)}>
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

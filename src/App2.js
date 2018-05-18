import React, { Component } from 'react';
import './App.css';
class App2 extends Component {
  constructor() {
    super();
    this.state = {
      workList: []
    };
  }
  addWorkForm = () => {
    let { workList } = this.state;
    workList.push({ id: 'id-' + Math.random() });
    console.log(workList);
    this.setState({ workList });
  };
  removeWork = deletework => {
    console.log(deletework);
    let workList = this.state.workList.filter(work => work !== deletework);
    this.setState({ workList });
  };
  handleSubmit = e => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.addWorkForm}>+</button>
        <div className="work-list">
          <form onSubmit={this.handleSubmit}>
            {this.state.workList.map(work => (
              <div className="work" key={work.id}>
                <input placeholder="公司名稱" type="text" name="company" />
                <input placeholder="工作名稱" type="text" name="job" />
                <input placeholder="工作內容" type="text" name="detail" />
                <button
                  type="button"
                  onClick={this.removeWork.bind(this, work)}
                >
                  -
                </button>
              </div>
            ))}
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default App2;

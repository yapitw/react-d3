import React from 'react'
import Chart from './Chart'

class App extends React.Component {
  state = {
    dataArray: [30, 35, 45, 55, 70],
  };

  changeData = () => {
    const arr = [];
    const amount = Math.floor(Math.random() * 5) + 5;
    for (let i = 0; i <= amount; i++) {
      arr.push(Math.floor(Math.random() * 30) + 20)
    }
    console.log(arr)
    this.setState(state => ({
      dataArray: arr
      // dataIndex: (state.dataIndex + 1) % 2
    }))
  };

  render() {
    return (
      <div>
        <button onClick={this.changeData}>Change data</button>
        <Chart
          data={this.state.dataArray}
          title={'DATASET'}
        />
      </div>
    )
  }
}

export default App

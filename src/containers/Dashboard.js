import React from 'react';
import {withRouter} from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: {},
      data: {}
    };
  }

  componentDidMount() {
    this.loadDashboardData();
  }

  async loadDashboardData() {
    fetch('/api/dashboard').then(
      response => {
        if (!response.ok) {
          throw Error('Network request failed.')
        }
        console.log('data', response);
        //this.setState({data: data});
      });
  }

  render() {
    console.log('render');
    const {data} = this.state.data;
    const items = data && data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    });

    return(
      <React.Fragment>

      <h1>Dashboard</h1>
      <ul>
      {items}
      </ul>
      </React.Fragment>
    );
  }
}

export default withRouter(Dashboard);

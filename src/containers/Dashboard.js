import React from 'react';
import {withRouter} from 'react-router-dom';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: {},
      data: []
    };
    this.loadDashboardData();
  }

  componentDidMount() {
    // this.loadDashboardData();
  }

  async loadDashboardData() {
    const response = await fetch('/api/dashboard', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    this.setState({data: data});
  }

  render() {
    const {data} = this.state;
    const items = data && data.map((entry, index) => {
      return <li key={index}>{entry.name}</li>
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

import React from 'react';
import { withRouter } from 'react-router-dom';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: {},
      data: [],
    };
  }

  componentDidMount() {
    // this.loadDashboardData();
  }

  async loadDashboardData() {
    const response = await fetch('/api/dashboard', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    this.setState({ data: data });
  }

  render() {
    const { data } = this.state;
    const items =
      data &&
      data.map((entry, index) => {
        return <li key={index}>{entry.name}</li>;
      });

    return (
      <main className="home">
        <h1>Dashboard</h1>
        <ul>{items}</ul>
        <button type="button" className="btn">
          Default
        </button>
        <button type="button" className="btn" disabled>
          Default disabled
        </button>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-primary" disabled>
          Primary disabled
        </button>
        <button type="button" className="btn btn-secondary">
          btn-secondary
        </button>
        <button type="button" className="btn btn-secondary" disabled>
          btn-secondary disabled
        </button>
        <button type="button" className="btn btn-link">
          Link
        </button>
        <button type="button" className="btn btn-link" disabled>
          Link disabled
        </button>
      </main>
    );
  }
}

export default withRouter(Dashboard);

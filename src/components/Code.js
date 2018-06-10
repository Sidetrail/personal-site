import React, { Component } from 'react';

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const repos = [];
    return (
      <div>
        <div className="featuredRepo">
          <div className="featuredRepoText" />
          <div className="featuredRepoRepo" />
        </div>
        <div>{repos}</div>
      </div>
    );
  }
}

export default Code;

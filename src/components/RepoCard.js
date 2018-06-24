import React, { Component } from 'react';

class RepoCard extends Component {
  constructor(props) {
    super(props);
    this.repo = props.repo
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>{this.repo.name}</div>
        <div>{new Date(this.repo.updated_at).toString()}</div>
      </div>
    );
  }
}

export default RepoCard;

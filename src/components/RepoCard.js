import React, { Component } from 'react';
import Axios from 'axios';

class RepoCard extends Component {
  constructor(props) {
    super(props);
    this.repo = props.repo;
    this.state = {};
  }

  componentWillMount = () => {
    Promise.all([this.getLanguages]).then(values => {
      console.log(values);
    });
  };

  getLanguages = Axios.get(this.repo.languages_url).then(data => {
    console.log('data languages:', data);
    return data;
  });

  render() {
    console.log(this.props);
    return (
      <div>
        <div>{this.repo.name}</div>
        <div>{new Date(this.repo.updated_at).toString()}</div>
        <div className="codeRepoLanguages">
          <div>Languages</div>
          <div>Main: {this.repo.language}</div>
          <div>Other Languages: </div>
        </div>
      </div>
    );
  }
}

export default RepoCard;

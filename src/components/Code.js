import React, { Component } from 'react';
import axios from 'axios';
import RepoCard from './RepoCard';

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoDisplay: [],
      filterButtons: [],
    };
  }

  componentWillMount = () => {
    this.getRepos().then(() => {});
  };

  getDailyProgrammerRepos = () => ['hello'];

  getRepos = () =>
    axios.get('https://api.github.com/users/sidetrail/repos').then(response => {
      console.log(response);
      this.setState({
        repoDisplay: response.data.map(
          i =>
            i.name === 'Daily-Programmer' ? (
              this.getDailyProgrammerRepos()
            ) : (
              <RepoCard repo={i} />
            ),
        ),
        repos: response.data,
      });
    });

  render() {
    console.log('repos', this.state.repoDisplay);
    return (
      <div>
        <div className="featuredRepo">
          <div className="featuredRepoText" />
          <div className="featuredRepoRepo" />
        </div>
        <div className="filterButtons">{this.filterButtons}</div>
        <div className="repoContainer">{this.state.repoDisplay}</div>
      </div>
    );
  }
}

export default Code;

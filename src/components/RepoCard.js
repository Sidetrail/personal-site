import React, { Component } from 'react';
import Axios from 'axios';

class RepoCard extends Component {
  constructor(props) {
    super(props);
    this.repo = props.repo;
    this.state = {};
    this.getLanguages = new Promise((resolve, reject) =>
      Axios.get(this.repo.languages_url).then(data => {
        resolve(data.data);
      }),
    );
  }

  componentWillMount = () => {
    Promise.all([this.getLanguages]).then(values => {
      let maxBits = 0;
      for (const i in values[0]) {
        maxBits += values[0][i];
      }
      console.log('reduce', maxBits);
      const langaugePercentages = [];
      for (const i in values[0]) {
        langaugePercentages.push(
          Math.floor((values[0][i] / maxBits) * 1000) / 10,
        );
      }
      this.setState({
        languages: Object.keys(values[0]),
        languagePercents: langaugePercentages,
      });
      console.log('values:', values[0]);
    });
  };

  render() {
    return (
      <div>
        <div>{this.repo.name}</div>
        <div>{new Date(this.repo.updated_at).toString()}</div>
        <div className="codeRepoLanguages">
          <div>Languages</div>
          <div>Main: {this.repo.language}</div>
          <div>Other Languages: {this.state.languages}</div>
          <div>
            Language Share:{' '}
            {this.state.languagePercents
              ? this.state.languagePercents.join(' ')
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default RepoCard;

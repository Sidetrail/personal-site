import React, { Component } from 'react';
import Axios from 'axios';
import PieChart from 'react-svg-piechart';

const languageColors = {
  'C++': '#f34b7d',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
};

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
      const piechartdata = [];
      console.log('reduce', maxBits);
      const langaugePercentages = [];
      for (const i in values[0]) {
        piechartdata.push({
          title: i,
          value: values[0][i],
          color: languageColors[i] || '#FFFFFF',
        });
        langaugePercentages.push(
          Math.floor((values[0][i] / maxBits) * 1000) / 10,
        );
      }
      this.setState({
        languages: Object.keys(values[0]),
        languagePercents: langaugePercentages,
        piechartdata,
      });
      console.log('values:', values[0]);
    });
  };

  render() {
    console.log('state', this.state);
    const languageArr = this.state.languages
      ? this.state.languages.map((i, index) => (
          <div>
            {i}:{' '}
            {this.state.langaugePercentages
              ? this.state.langaugePercentages[index]
              : null}
          </div>
        ))
      : null;
    return (
      <div className="repoCard">
        <div className="repoCardName">{this.repo.name}</div>
        <div className="repoCardLastUpdated">
          Last Updated:{' '}
          {`${new Date(this.repo.updated_at).getFullYear()}/${new Date(
            this.repo.updated_at,
          ).getMonth() + 1}/${new Date(this.repo.updated_at).getDate()}`}
        </div>
        <div className="codeRepoLanguages">
          <div className="lanugagesTitle">Languages</div>
          <div className="languagesChartAndTable">
            <div className="languagesTable">{languageArr}</div>
            <div className="chartContainer">
              <PieChart
                data={this.state.piechartdata}
                expandOnHover
                viewBoxSize={50}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RepoCard;

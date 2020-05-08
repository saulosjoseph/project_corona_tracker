import React from 'react';
import _ from 'lodash';

import { Cards, OptionSelect, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {}

  async componentDidMount() {
    const data = await fetchData();

    this.setState(data);
  }

  render() {
    const data = this.state;
    const lastData = _.last(data) || {};
    
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <OptionSelect />
        <Chart data={data} />       
        <Cards data={lastData} />  
      </div>
    );
  }
}

export default App;
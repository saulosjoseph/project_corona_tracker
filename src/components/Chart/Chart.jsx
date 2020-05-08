import React from 'react';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

import styles from './Chart.module.css';

const Chart = (countrys) => {
  const datasets = [];
  if (!_.isEmpty(countrys.data)) {
    for (const country in countrys.data) {
      datasets.push({
        data: countrys.data[country].map((data) => data.Deaths),
        label: country,
        borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        fill: false,
      });
    }
  }
  const lineChart = (
    !_.isEmpty(countrys.data) ? (
      <Line
        data={{
          labels: countrys.data.brasil.map((data) => new Date(data.Date).toLocaleDateString('pt-br')),
          datasets,
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  );
};

export default Chart;

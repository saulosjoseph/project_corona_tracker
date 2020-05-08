import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { Confirmed, Recovered, Deaths, lastUpdate = '2020-05-06T00:00:00Z' } }) => {
  if (!Confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Confirmados
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={Confirmed} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toLocaleDateString('pt-br')}
            </Typography>
            <Typography variant="body2" component="p">
              Número de casos confirmados de COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recuperados
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={Recovered} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toLocaleDateString('pt-br')}
            </Typography>
            <Typography variant="body2" component="p">
              Número de recuperados de COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Óbitos
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={Deaths} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toLocaleDateString('pt-br')}
            </Typography>
            <Typography variant="body2" component="p">
              Número de óbitos causados por COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;

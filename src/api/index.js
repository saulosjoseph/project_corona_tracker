/* eslint-disable linebreak-style */
import axios from 'axios';

const url = 'https://api.covid19api.com';

export const fetchData = async () => {
  const brazilUrl = `${url}/dayone/country/brazil`;
  const argentinaUrl = `${url}/dayone/country/argentina`;
  const venezuelaUrl = `${url}/dayone/country/venezuela`;
  const boliviaUrl = `${url}/dayone/country/bolivia`;
  const peruUrl = `${url}/dayone/country/peru`;

  try {
    const brazilData = await axios.get(brazilUrl);
    const argentinaData = await axios.get(argentinaUrl);
    const venezuelaData = await axios.get(venezuelaUrl);
    const boliviaData = await axios.get(boliviaUrl);
    const peruData = await axios.get(peruUrl);

    return {
      brasil: brazilData.data,
      argentina: argentinaData.data,
      venezuela: venezuelaData.data,
      bolivia: boliviaData.data,
      peru: peruData.data,
    };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  const changeableUrlBrazil = `${url}/dayone/country/brazil`;
  try {
    const { data } = await axios.get(changeableUrlBrazil);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

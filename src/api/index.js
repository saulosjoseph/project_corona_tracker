/* eslint-disable linebreak-style */
import axios from 'axios';

const url = 'https://api.covid19api.com';

const equalizeData = (country, reference) => {
  const toAdd = reference.length - country.length;
  const dataToAdd = reference.slice(0, toAdd);
  const newData = dataToAdd.map((data) => ({
    Deaths: 0,
    Recovered: 0,
    Confirmed: 0,
    Date: data.date,
  }));
  country.map((data) => newData.push(data));
  return newData;
};

export const fetchData = async () => {
  const brazilUrl = `${url}/dayone/country/brazil`;
  const argentinaUrl = `${url}/dayone/country/argentina`;
  const venezuelaUrl = `${url}/dayone/country/venezuela`;
  const boliviaUrl = `${url}/dayone/country/bolivia`;
  const peruUrl = `${url}/dayone/country/peru`;
  const ecuadorUrl = `${url}/dayone/country/ecuador`;

  try {
    const brazilData = await axios.get(brazilUrl);
    const argentinaData = await axios.get(argentinaUrl);
    const venezuelaData = await axios.get(venezuelaUrl);
    const boliviaData = await axios.get(boliviaUrl);
    const peruData = await axios.get(peruUrl);
    const ecuadorData = await axios.get(ecuadorUrl);

    return {
      brasil: brazilData.data,
      argentina: equalizeData(argentinaData.data, brazilData.data),
      venezuela: equalizeData(venezuelaData.data, brazilData.data),
      bolivia: equalizeData(boliviaData.data, brazilData.data),
      peru: equalizeData(peruData.data, brazilData.data),
      ecuador: equalizeData(ecuadorData.data, brazilData.data),
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

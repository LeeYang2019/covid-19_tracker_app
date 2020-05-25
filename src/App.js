import React from 'react';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Chart from './components/Chart/Chart';
import styles from './App.module.css';
import { fetchData } from './api'; //when specifying index files, you do not need to type it out
import coronaImage from './images/image.png';

class App extends React.Component {
  //create state and data object
  state = {
    data: {},
    country: '',
  };

  //use componentDidMount, then fetch data and assign data to state
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    //deconstruct and take country out from state
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} alt="COVID-19" src={coronaImage} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import COVID19 from "./images/COVID-timeline.gif";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <h3>COVID-19 Tracker</h3>
        <img className={styles.img} src={COVID19} alt="COVID19" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
        <footer>
          Copyright ©️ 2021&nbsp;
          <a href="https://www.linkedin.com/in/chrisbin-thomas-334744195">
            Chrisbin Thomas
          </a>
        </footer>
      </div>
    );
  }
}

export default App;

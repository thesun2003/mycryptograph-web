import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner'

import DonutChart from '../../../Components/Visualisation/DonutChart/DonutChart';

import './CurrentBalance.css';

class CurrentBalancePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    prepareData(data, fieldName) {
        let preparedData = [
            ["Currency", "Value"]
        ];

        let currencies = data['currencies'];
        for (let currencyName in currencies) {

            preparedData.push([
                currencyName,
                currencies[currencyName][fieldName]
            ]);
        }

        return preparedData;
    }

    async componentDidMount() {
        const apiUrl = 'http://mcg-api.local/get-total-balances/';

        const res = await axios.get(apiUrl);
        const allData = this.prepareData(res.data, 'usdValue');

        this.setState({ data: allData });
    }

    getChart() {
        let chartHeight = "300px";
        let chart = (
            <Loader
                type="Ball-Triangle"
                color="#00BFFF"
                height={chartHeight}
                width="100%"
            />
        );

        if (this.state.data) {
            chart = (
                <DonutChart
                    title={ "Current Balance" }
                    height={chartHeight}
                    data={this.state.data}
                />
            );
        }

        return chart;
    }

    render() {
        return (
            <div className="current-balance-page">
                <h1>Current Balance</h1>
                <div className="chart">
                    {this.getChart()}
                </div>
            </div>
        );
    }
}

export default CurrentBalancePage;

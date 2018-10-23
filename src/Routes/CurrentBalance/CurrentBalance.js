import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Loader from 'react-loader-spinner'
import caxios from "../../Common/caxios";
import Template, { Page, Section } from "../../Common/Templates/Template";
import DonutChart from '../../Common/Visualisation/DonutChart/DonutChart';

import './CurrentBalance.css';

class CurrentBalance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            totals: null,
        };
    }

    static prepareData(data, fieldName) {
        let preparedData = [
            ["Currency", "Value"]
        ];

        let currencies = data['currencies'];
        for (let currencyName in currencies) {

            let value = currencies[currencyName][fieldName];
            if (currencies[currencyName]['available'] > 0 && !value) {
                value = 5e-8;
            }

            preparedData.push([
                currencyName,
                value
            ]);
        }

        return preparedData;
    }

    async componentDidMount() {
        const ttl = 5 * 60; // 5 minutes
        const apiUrl = 'http://mcg-api.local/get-total-balances/';

        let balanceType;
        switch (this.props.balanceType) {
            case 'BTC':
                balanceType = 'btcValue';
                break;
            case 'USD':
            default:
                balanceType = 'usdValue';
                break;
        }

        const res = await caxios.cached(ttl).get(apiUrl);
        const allData = this.constructor.prepareData(res.data, balanceType);

        this.setState({ data: allData, totals: res.data['totals'] });
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

    getTotals() {
        let totals = '';

        if (this.state.totals) {
            totals = (
                <Fragment>
                    <span>Total:</span> {this.state.totals['btcValue']} BTC, {this.state.totals['usdValue']} USD
                </Fragment>
            );
        }

        return totals;
    }

    renderPage() {
        return Template.render(
            (
                <Page layout="main">
                    <Section slot="title">
                        <Helmet>
                            <title>MCG App // Current balance</title>
                        </Helmet>
                    </Section>
                    <Section slot="content">
                        <div className="current-balance-page">
                            <h1>Current Balance</h1>
                            <div className="chart">
                                {this.getChart()}
                            </div>
                            <div className="totals">
                                {this.getTotals()}
                            </div>
                        </div>
                    </Section>
                </Page>
            )
        );
    }

    render() {
        return (
            <Fragment>
                {this.renderPage()}
            </Fragment>
        );
    }
}

export default CurrentBalance;

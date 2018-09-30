import React, { Component } from 'react';
import {Locations, Location } from 'react-router-component';

import CurrentBalance from './CurrentBalance';

class BalanceRouter extends Component {
    render() {
        return (
            <Locations contextual>
                <Location path="/(:balanceType/)*" handler={CurrentBalance} />
            </Locations>
        )
    }
}

export default BalanceRouter;

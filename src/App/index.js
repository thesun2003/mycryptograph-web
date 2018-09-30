import React, { Component } from 'react';
import { Locations, Location } from 'react-router-component';

import BalanceRouter from '../Routes/CurrentBalance/index';
import App from './App';

class AppRouter extends Component {
    render() {
        return (
            <Locations>
                <Location path="/" handler={App} />
                <Location path="/balance(/*)" handler={BalanceRouter} />
                {/*<Location path={/\/friends\/(\d+)\/(photos|wall)/} handler={FriendsPage}*/}
                {/*urlPatternOptions={['id', 'pageName']} />*/}
            </Locations>
        )
    }
}

export default AppRouter;

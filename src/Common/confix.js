import default_settings from '../Config/default.json';
import production_settings from '../Config/production.json';

// TODO: improve the code logic
class confix {
    static get(parameter) {
        let value = null;

        // default settings
        value = default_settings[parameter] ? default_settings[parameter] : value;

        // production settings override
        if (process.env.REACT_APP_STAGE === 'prod') {
            value = production_settings[parameter] ? production_settings[parameter] : value;
        }

        // ENV override
        value = process.env[parameter] ? process.env[parameter] : value;

        return value;
    }
}

export default confix;

import React from 'react';
import Paper from 'material-ui/Paper';
import { TextField } from 'material-ui';

import paperStyle from './../../../styles/paperStyle'

class OptionsView extends React.Component {

    render() {
        return (
            <Paper>
                <TextField
                    style={paperStyle}
                    name={'Ip_input'}
                    floatingLabelText={'IP address of the controller.'}
                />
            </Paper>
        )
    }
}

export default OptionsView
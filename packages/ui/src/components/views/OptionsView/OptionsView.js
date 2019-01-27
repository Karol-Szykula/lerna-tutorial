import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
import {
    ipChangeAction,

} from './../../../state/options';

import { TextField } from 'material-ui';
import paperStyle from './../../../styles/paperStyle';

class OptionsView extends React.Component {

    render() {
        return (
            <Paper>
                <TextField
                    style={paperStyle}
                    name={'Ip_input'}
                    floatingLabelText={'IP address of the controller.'}
                    value={this.props.ipAdress}
                    onChange={this.props.ipChangeAction}
                />
            </Paper>
        )
    }
}


const mapStateToProps = (state) => ({
    ipAdress: state.options.ipAdrress,
})

const mapDispatchToProps = (dispatch) => ({
    ipChangeAction: (event) => dispatch(ipChangeAction(event.target.value)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionsView)
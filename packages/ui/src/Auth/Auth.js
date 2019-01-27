import React from 'react'

import LoginForm from './LoginForm'

import { connect } from 'react-redux'
import {
    emailChangeAction,
    passwordChangeAction,
    registrationEmailChangeAction,
    registrationPasswordChangeAction,
    confirmedRegistrationPasswordChange,
    userRegistrationAsyncAction,

    logInAsyncAction,

    // logInByGoogleAsyncAction,
    // resetPasswordAsyncAction,
} from '../state/auth'

import RegistrationForm from './RegistrationForm';

const Auth = (props) => (
    props._isUserLoggedIn ?
        <div>
            {props.children}
        </div>
        :
        <div>
            <LoginForm
                email={props._email}
                onEmailChangeHandler={props._emailChangeAction}
                password={props._password}
                onPasswordChangeHandler={props._passwordChangeAction}

                onLogInClick={props._logInAsyncAction}
                onLogInByGoogleClick={props._logInByGoogleAsyncAction}
                onPasswordReset={props._passwordResetAsyncAction}
            />
            <RegistrationForm

                registrationEmail={props._registrationEmail}
                registrationEmailChangeHandler={props._registrationEmailChangeAction}

                registrationPassword={props._registrationPassword}
                registrationPasswordChangeHandler={props._registrationPasswordChangeAction}

                confirmedRegistrationPassword={props._confirmedRegistrationPassword}
                confirmedRegistrationPasswordChangeHandler={props._confirmedRegistrationPasswordChange}

                onSignUpClick={props._userRegistrationAsyncAction}
            />
        </div>
)

const mapStateToProps = state => ({
    _isUserLoggedIn: state.auth.isUserLoggedIn,
    _email: state.auth.email,
    _password: state.auth.password,
    _registrationEmail: state.auth.registrationEmail,
    _registrationPassword: state.auth.registrationPassword,
    _confirmedRegistrationPassword: state.auth.confirmedRegistrationPassword,
})

const mapDispatchToProps = dispatch => ({
    _emailChangeAction: (event) => dispatch(emailChangeAction(event.target.value)),
    _passwordChangeAction: (event) => dispatch(passwordChangeAction(event.target.value)),
    _registrationEmailChangeAction: (event) => dispatch(registrationEmailChangeAction(event.target.value)),
    _registrationPasswordChangeAction: (event) => dispatch(registrationPasswordChangeAction(event.target.value)),

    _confirmedRegistrationPasswordChange: (event) => dispatch(confirmedRegistrationPasswordChange(event.target.value)),

    _userRegistrationAsyncAction: () => dispatch(userRegistrationAsyncAction()),
    _logInAsyncAction: () => dispatch(logInAsyncAction()),

    // _logInByGoogleAsyncAction: () => dispatch(logInByGoogleAsyncAction()),

    // _passwordResetAsyncAction: () => dispatch(resetPasswordAsyncAction()),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)

import validateEmail from '../utils/emailValidation'

import { serverAdresss } from '../api';
import api from './../api';

const LOG_IN = 'auth/LOG_IN'
const LOG_OUT = 'auth/LOG_OUT'
const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'

const REGISTRATION_EMAIL_CHANGE = 'auth/REGISTRATION_EMAIL_CHANGE'
const REGISTRATION_PASSWORD_CHANGE = 'auth/REGISTRATION_PASSWORD_CHANGE'
const CONFIRMED_REGISTRATION_PASSWORD_CHANGE = 'auth/CONFIRMED_REGISTRATION_PASSWORD_CHANGE'

export const userRegistrationAsyncAction = () => (dispatch, getState) => {
    const email = getState().auth.registrationEmail
    const regPass = getState().auth.registrationPassword
    const conRegPass = getState().auth.confirmedRegistrationPassword


    const payLoad = {
        email,
        password: regPass
    }

    if (validateEmail(email) && regPass !== '' && (regPass === conRegPass)) {
        console.log(`${JSON.stringify(payLoad)}/users`)
        fetch(`${serverAdresss}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payLoad)

        }).then(response => console.log(response.json()))
            .catch(error => console.log(error))
    } else if (!(validateEmail(email))) {
        alert(`That is not a valid email adress`)
    } else if (regPass !== conRegPass) {
        alert(`Passwords doesn't match`)
    } else {
        alert(`Something went wrong`)
    }
}

// export const logOutAsyncAction = () => (dispatch, getState) => {
//     auth.signOut()
//         .then(
//             res => {
//                 dispatch(logOutAction())
//                 dispatch(clearAllTasks())
//             })
// }

// export const logInByGoogleAsyncAction = () => (dispatch, getState) => {
//     auth.signInWithPopup(googleProvider)
//         .then(res => {
//             dispatch(logInAction(res.user))
//             dispatch(saveLogInTimestampAsyncAction())
//             dispatch(loadTasksFromDbAsyncAction())
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             if (errorCode === 'auth/wrong-password') {
//                 alert('Wrong password.')
//             } else {
//                 alert(errorMessage)
//             }
//         })
// }

export const logInAsyncAction = () => (dispatch, getState) => {
    const email = getState().auth.email
    const password = getState().auth.password

    const credentials = {
        strategy: 'local',
        email: email,
        password: password
    }

    fetch(`${serverAdresss}/authentication`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json())
        .then(data => {
            dispatch(logInAction(data.accessToken))
        })
        .catch(error => console.log(error))
}

// export const resetPasswordAsyncAction = () => (dispatch, getState) => {
//     auth.sendPasswordResetEmail(getState().auth.email)
//         .then(() => alert('Password reset link has been sent on the email'))
//         .catch(error => alert('Wrong user name or password, try again.'))
// }

// const saveLogInTimestampAsyncAction = () => (dispatch, getState) => {
//     database.ref('usersLogins/loginsLogs').push({
//         timestamp: Date.now()
//     })
// }

const logInAction = accessToken => ({
    type: LOG_IN,
    accessToken
})
const logOutAction = () => ({ type: LOG_OUT })

export const emailChangeAction = newValue => ({
    type: EMAIL_CHANGE,
    newValue
})

export const passwordChangeAction = newValue => ({
    type: PASSWORD_CHANGE,
    newValue
})

export const registrationEmailChangeAction = newValue => ({
    type: REGISTRATION_EMAIL_CHANGE,
    newValue
})

export const registrationPasswordChangeAction = newValue => ({
    type: REGISTRATION_PASSWORD_CHANGE,
    newValue
})

export const confirmedRegistrationPasswordChange = newValue => ({
    type: CONFIRMED_REGISTRATION_PASSWORD_CHANGE,
    newValue
})

const INITIAL_STATE = {
    isUserLoggedIn: false,
    email: 'example@example.com',
    password: 'example',
    user: null,

    accessToken: null,

    registrationEmail: 'example@example.com',
    registrationPassword: 'example',
    confirmedRegistrationPassword: 'example',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isUserLoggedIn: true,
                accessToken: action.accessToken
            }
        case LOG_OUT:
            return {
                ...state,
                isUserLoggedIn: false,
                user: null
            }
        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.newValue
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.newValue
            }

        case REGISTRATION_EMAIL_CHANGE:
            return {
                ...state,
                registrationEmail: action.newValue
            }

        case REGISTRATION_PASSWORD_CHANGE:
            return {
                ...state,
                registrationPassword: action.newValue
            }

        case CONFIRMED_REGISTRATION_PASSWORD_CHANGE:
            return {
                ...state,
                confirmedRegistrationPassword: action.newValue
            }

        default:
            return state
    }
}
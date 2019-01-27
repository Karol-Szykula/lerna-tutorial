const CHANGE_IP_ACTION = 'options/CHANGE_IP_ACTION';

export const ipChangeAction = (newIpValue) => ({
    type: CHANGE_IP_ACTION,
    newIpValue
})

const optionsInitialState = {
    ipAdrress: 'http://localhost:3030'
}
const options = (state = optionsInitialState, action) => {
    switch (action.type) {
        case CHANGE_IP_ACTION:
            return {
                ...state,
                ipAdrress: action.newIpValue
            }
        default:
            return state
    }
}

export default options;
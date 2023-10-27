const initialState = {

}

const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setFile":
            return action.file
        case "removeFile":
            return {}
        default:
            return state;
    }
}

export default fileReducer;
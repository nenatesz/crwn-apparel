import { Sections } from './directory.data'

const INITIAL_STATE = {
    sections: Sections
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;
import _ from 'lodash'

// this is a model of the store variables
export default function reducer(state={
    message: '',
    status: status.PLAYING
}, action) {

    switch (action.type) {
        case "DO_SOMETHING": {
            let obj = Object.assign({}, 
                state, 
                {
                    message: 'Doing something'
                }
            );
            return obj;
        }
        
    }

    // default
    return state
}

import _ from 'lodash'

// this is a model of the store variables
export default function reducer(state={
    user: null,
    userId: -1
}, action) {

    switch (action.type) {
        case "LOAD_DATA": {
            let vals = getNextUser(state.userId)
            let newState = Object.assign({}, 
                state, 
                {
                    user: vals.user,
                    userId: vals.id
                }
            );
            return newState;
        }
        
    }

    // default
    return state
}

const users = [{firstname:'Amanda', lastname:'Helliwell'},{firstname:'Linda', lastname:'Patterson'}]
function getNextUser(i) {
    let id = 0
    if (i >= 0 && i <= users.length -1) {
        id = i+1
    }
    return {
        user: users[id],
        id
    }
}

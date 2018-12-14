export default function(state= null, action){
    switch(action.type){
        case 'MOVIES_LIST':
            return action.payload
        case 'ARTIST_LIST':
            return action.payload.results
        default:
            return state
    }
}
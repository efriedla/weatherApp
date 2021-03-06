/**
 * importing Fetch_Weather from action/mainAction
 * @param {*} state  is an array
 * @param {*} action  is what we get ack from the api
 */
import { Fetch_Weather } from "../actions/mainAction";

export default function(state = [], action){
    switch(action.type){
        case 'Fetch_Weather':
        // handle payload
        // return state.concat([action.payload.data]);
        return [ action.payload.data, ...state ]; // [ city, city, city ]
        return state.concat([action.payload.data]);
    }
    console.log("action: ", action.payload);
    return state;
}
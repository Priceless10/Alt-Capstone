import { UserDetails } from "../types/user"
import { initialState } from "../context/AuthContext";


// useReducer action type
export type ActionType = {
  type: string;
  payload?: any;
};



// useReducer function 
export const reducer = (state: UserDetails = initialState, action: ActionType) => {
    switch (action.type) {
        case "SIGN_IN":
          return { ...state, user: action.payload};
        case "SIGN_OUT":
            return { ...state, user: null};
        case "SET_FNAME":
            return { ...state, user: {...state.user, displayName: {...state.user.displayName, first: action.payload}}}
        case "SET_LNAME":
          return { ...state, user: {...state.user, displayName: {...state.user.displayName, last: action.payload}}};
          case "SET_USERNAME":
            return { ...state, user: {...state.user, username: action.payload}}
        case "SET_EMAIL":
          return { ...state,user: {...state.user, email: action.payload}};
      case "SET_PASSWORD":
          return { ...state, user: {...state.user, password: action.payload}};
          case "SET_FEED_DATA":
          return { ...state, user: {...state.user, topics: [...state.user.topics, action.payload]}};
  
      default:
        return state;
    } 

    return state
}

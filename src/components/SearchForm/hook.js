import { useReducer } from "react";

const ACTIONS ={
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
}

const ACTION_REDUCERS ={
    [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
        ...state,
        keyword: action.payload,
        times: state.times + 1,
    }),
    [ACTIONS.UPDATE_RATING]: (state, action) => ({
        ...state,
        rating: action.payload,
    }),
}

const REDUCER = (state, action) => {
  const actionReducer = ACTION_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
}           
export default function useForm({initialKeyword, initialRating}) {
    const [state, dispatch] = useReducer(REDUCER, {
    keyword: decodeURI(initialKeyword),
    rating: initialRating,
    times: 0,
  });

  return {
    keyword: state.keyword,
    rating: state.rating,
    times: state.times,
    updateKeyword: (keyword) => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
    updateRating: (rating) => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
  }
}


import {plusUserCount} from 'store/actions';

const initState = {
  count: '0',
};

type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof plusUserCount>;

export const usersCountReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case 'PLUS_USER_COUNT':
      let num = Number(state.count)
      return {
        ...state,
        count: (num+=1).toString(),
      };
    default:
      return state;
  }
};

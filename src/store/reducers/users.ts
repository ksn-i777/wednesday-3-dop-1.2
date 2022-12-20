import {createUser} from 'store/actions';
import {UserType} from 'types';

const initState = {
  users: [] as UserType[],
};

type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof createUser>;

export const usersReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {    
    case 'СREATE_USER':
      return {...state, 
        users: [...state.users, {id: action.payload.id, name:action.payload.name}] as UserType[],
      };
    default:
      return state;
  }
};

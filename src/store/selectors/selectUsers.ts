import {UserType} from '../../types/UserType';
import { RootStoreType } from '../index';

export const selectUsers = (state: RootStoreType): UserType[] => state.usersData.users;

import {RootStoreType} from '../index';

export const selectUsersCount = (state: RootStoreType):string => state.userCount.count;

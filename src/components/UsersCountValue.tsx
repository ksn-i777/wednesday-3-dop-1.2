import React, {FC, memo} from 'react';

type PropsType = {
  usersCount: string;
};

export const UsersCountValue: FC<PropsType> = memo(({usersCount}) => {

  return <span>Users count: {usersCount}</span>;
});

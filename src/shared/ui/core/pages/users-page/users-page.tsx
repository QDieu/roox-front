import React from "react";
import { TUser } from "../../../../types/User";
import { Users } from "../../organisms";
import { UsersTemplate } from "../../templates";

type TProps = {
  users: Array<TUser>;
  onClickInfo: (user: TUser) => void;
};

export const UsersPage: React.FC<TProps> = ({ users, onClickInfo }) => {
  return (
    <UsersTemplate
      content={<Users users={users} onClickInfo={onClickInfo} />}
    />
  );
};
